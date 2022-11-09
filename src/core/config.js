import { Obj } from 'reinforcements';

let configirationList = {};
const config = {
  /**
   *
   * @param {string} key
   * @param {any} value
   */
  set(key, value) {
    if (arguments.length === 1) {
      configirationList = Object.assign(configirationList, key);
    } else {
      configirationList[key] = value;
    }
    console.log(configirationList);
  },

  /**
   *
   * @param {string} key
   * @param {any} defaultValue
   */
  get(key, defaultValue = null) {
    return Obj.get(configirationList, key, defaultValue);
  },
};

export default config;
