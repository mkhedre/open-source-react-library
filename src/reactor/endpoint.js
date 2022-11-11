import Is from '@flk/supportive-is';
import axios from 'axios';
import config from './config';

export default axios.create({
  baseURL: config.get('endpoint.baseUrl'),
  transformRequest: [
    function (data) {
      if (Is.formElement(data)) {
        return new FormData(data);
      }
      return data;
    },
  ],
});
