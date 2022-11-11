import cache from './Cache';
class User {
  constructor() {
    this.userData = cache.get('user');
  }

  isLoggedIn() {
    return this.userData !== null;
  }

  login(userData) {
    cache.set('user', userData);
  }
}
export default new User();
