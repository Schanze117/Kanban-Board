class AuthService {
  getProfile() {
    // TODO: return the decoded token
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return token;
  }
  
  isTokenExpired(token: string)  {
    // TODO: return a value that indicates if the token is expired
    if (!token) {
      return false;
    }
    const payload = token.split('.')[1];
    const decoded = JSON.parse(atob(payload));
    return decoded.exp < Date.now() / 1000;
  }

  getToken(): string {
    // TODO: return the token
    const loggeduser = localStorage.getItem('id_token') || '';
    return loggeduser;
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
      localStorage.setItem('id_token', idToken);
      window.location.assign('/');
    }

    logout() {
      // TODO: remove the token from localStorage
      // TODO: redirect to the login page
      localStorage.removeItem('id_token');
      window.location.assign('/');
    }
  }

  

export default new AuthService();
