export class AuthAsync {
  protected auth: any;

  constructor(auth: any) {
    this.auth = auth;
  }

  login() {
    return this.auth.loginWithPopup();
  }

  logout() {
    return this.auth.logout();
  }

  get isAuthorized() {
    return this.auth.isAuthenticated;
  }

  get token() {
    return this.auth.getAccessTokenSilently();
  }

  get user() {
    return this.auth.user;
  }
}
