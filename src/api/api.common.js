import axios from 'axios'
import { Loading, Message } from 'element-ui';
import router from '../router'
import Vue from 'vue'
export default {
  request(method, url, data) {
    const loading = Loading.service({
      lock: true,
      text: '拼命加载中...',
      background: 'rgba(0,0,0,.38)'
    });
    try {
      return new Promise(function(resolve, reject) {
        axios({
          "url": url,
          "method": method,
          "baseURL": process.env.NODE_ENV === 'production' ? '' : '',
          "data": data,
          "headers": {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          "transformRequest": [function(data) {
            let ret = ''
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }],
          "timeout": 5000
        }).then(msg => {
          let code = msg.data.code || msg.status;
          switch (parseInt(code)) {
            case 200:
            case 0:
              resolve(msg.data);
              break;
            case 500:
            default:
              if (msg.data && msg.data.msg) {
                Message.error(`小主,${msg.data.msg}`);
              } else {
                Message.error('小主,您的网络不稳定，请稍候再试');
              }
              reject(msg.data);
              break;
          }
          loading.close();
        }).catch(err => {
          switch (err.status) {
            case 500:
              Message.error('小主,您的网络不稳定，请稍候再试');
              break;
            case 401:
            case 403:
            case 404:
              router.push('/404');
              break;
            default:
              Message.error('小主,您的网络不稳定，请稍候再试');
              break;
          }
          loading.close();
          reject(err);
        });
      });
    } catch (err) {
      loading.close();
      reject(err);
      console.log(e);
    }
  }
}
