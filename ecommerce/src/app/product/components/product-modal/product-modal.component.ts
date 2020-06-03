import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription, Observable, Observer } from 'rxjs';

import { AngularEditorConfig } from '@kolkov/angular-editor';

import { NzMessageService, UploadXHRArgs } from 'ng-zorro-antd';

import { ProductSandbox } from '../../product.sandbox';
import { CategorySandbox } from '../../../category/category.sandbox';
import { FileSandbox } from '../../../file/file.sandbox';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit, OnDestroy {
  @Input() editing: boolean;

  public isLoading$ = this.productSandbox.isLoadingProduct$;

  public categoriesCollection$ = this.categorySandbox.categoriesCollection$;

  public isLoadingFile$ = this.fileSandbox.isLoadingFile$;

  public fileSelected$ = this.fileSandbox.fileSelected$;

  public formGroup: FormGroup;

  public fileUrl: string;

  private subscription = new Subscription();

  editorConfig: AngularEditorConfig = {
    editable: true,
    defaultParagraphSeparator: 'p',
    toolbarHiddenButtons: [
      [
        'undo',
        'redo',
        'strikeThrough',
        'subscript',
        'superscript',
        'indent',
        'outdent',
        'heading',
        'fontName',
      ],
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
      ],
    ],
  };

  constructor(
    private formBuilder: FormBuilder,
    private productSandbox: ProductSandbox,
    private categorySandbox: CategorySandbox,
    private fileSandbox: FileSandbox,
    private message: NzMessageService
  ) {
    this.formGroup = this.formBuilder.group({
      id: [null],
      category_id: [null, [Validators.required]],
      file_id: [null, [Validators.required]],
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      price: ['', [Validators.required]],
      status: [true],
    });
  }

  ngOnInit() {
    if (this.editing) {
      this.subscription.add(
        this.productSandbox.productSelected$.subscribe((data) => {
          this.formGroup.patchValue(data);
          this.fileUrl = data.file.url;
        })
      );
    }

    this.subscription.add(
      this.fileSelected$.subscribe((file) => {
        if (file) {
          this.formGroup.get('file_id').patchValue(file.id);
          this.fileUrl = file.url;
        }
      })
    );
    this.categorySandbox.loadCategorys();
  }

  beforeUpload = (file: File) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJPG = file.type === 'image/jpeg';
      if (!isJPG) {
        this.message.error('Você só pode enviar arquivos JPG!');
        observer.complete();
        return;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.message.error('A imagem deve ter menos de 2MB!');
        observer.complete();
        return;
      }
      this.checkImageDimension(file).then((dimensionRes) => {
        if (!dimensionRes) {
          this.message.error(' Imagem apenas 300 x 300 acima!');
          observer.complete();
          return;
        }
        observer.next(isJPG && isLt2M && dimensionRes);
        observer.complete();
      });
    });
  };

  private checkImageDimension(file: File): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = window.URL.createObjectURL(file);
      img.onload = () => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        window.URL.revokeObjectURL(img.src!);
        resolve(width === height && width >= 300);
      };
    });
  }

  onFileUpload = (item: UploadXHRArgs) => {
    const formData = new FormData();
    formData.append('file', item.file as any);
    this.fileSandbox.uploadFile(formData);
  };

  saveProduct() {
    for (const field in this.formGroup.controls) {
      this.formGroup.controls[field].markAsDirty();
      this.formGroup.controls[field].updateValueAndValidity();
    }

    if (!this.formGroup.get('file_id').valid) {
      return this.message.create('warning', 'Opsss... Imagem é obrigatória!');
    }

    if (this.formGroup.valid) {
      if (this.editing && this.formGroup.get('id') !== null) {
        return this.productSandbox.updateProduct(this.formGroup.value);
      }
      return this.productSandbox.createProduct(this.formGroup.value);
    }
  }

  cancel() {
    this.productSandbox.closeModal();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
