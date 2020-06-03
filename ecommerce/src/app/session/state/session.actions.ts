export class UpdateSessionToken {
  static readonly type = '[Session] Update Session Token';

  constructor(
    public payload: {
      refreshToken: string;
      accessToken: string;
      IdToken: string;
    }
  ) {}
}

export class Logoff {
  static readonly type = '[Session] Logoff';
}

export class RefreshToken {
  static readonly type = '[Session] Refresh Token';
}

export class RefreshTokenSuccess {
  static readonly type = '[Session] Refresh Token Success';

  constructor(
    public payload: {
      refreshToken: string;
      accessToken: string;
      IdToken: string;
    }
  ) {}
}

export class RefreshTokenError {
  static readonly type = '[Session] Refresh Token Error';

  constructor(public payload: string) {}
}
