// eslint-disable-next-line import/no-anonymous-default-export
export default {
  storage: localStorage,
  /**
   *
   * @param {string} key
   * @param {value} value
   */
  set(key, value) {
    this.storage.setItem(
      key,
      JSON.stringify({
        data: value,
      })
    );
  },

  /**
   *
   * @param {string} key
   */
  get(key) {
    let value = this.storage.getItem(key);
    if (value) {
      return JSON.parse(value).data;
    }
    return null;
  },

  remove(key) {
    this.storage.removeItem(key);
  },
};
