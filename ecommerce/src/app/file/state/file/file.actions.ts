export class UploadFile {
  static readonly type = '[Files] Upload File';

  constructor(public payload: FormData) {}
}

export class UploadFileSuccess {
  static readonly type = '[Files] Upload File Success';

  constructor(public payload: any) {}
}

export class UploadFileFail {
  static readonly type = '[Files] Upload File Fail';

  constructor(public payload: any) {}
}

export class ResetFile {
  static readonly type = '[Files] Reset File';
}
