import React from 'react';
import ReactorComponent from './reactor.component';

class ReactorPageComponent extends ReactorComponent {
  /**
   * set page meta data
   *  @params {string} key
   */
  //   utf-8 web can handle any langauge
  setMeta(key, value) {
    switch (key) {
      case 'title':
        document.title = value;
        break;
      case 'description':
        let metaDesc = document.getElementById('meta-desc');
        metaDesc.content = value;
        break;
      default:
        break;
    }
    return this;
  }
}
export default ReactorPageComponent;
