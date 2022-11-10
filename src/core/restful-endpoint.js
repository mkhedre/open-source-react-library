import endpoint from './endpoint';

export default class RestfulEndpoint {
  route = '';

  /**
   *
   * @param {object} params
   */
  list(params) {
    console.log(this.route)
  }
  /**
   *
   *
   * @param {number} id
   * @param {object} params
   */
  get(id, params) {}
  /**
   *
   * @param {object} data
   */
  post(data) {}
  /**
   * @param {number} id
   * @param {object} params
   */
  put(id, data) {}
  /**
   *
   * @param {number} id
   */
  delete(id) {}
}
