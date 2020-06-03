import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss'],
})
export class HeaderButtonComponent implements OnInit {
  @Input() title: string;

  @Input() fontSizeTitle = '24px';

  @Input() buttons: any[];

  @Output() clickButton = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
