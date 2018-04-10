import api_common from 'api/api.common'
export default {
  lotteryOrdersList() {
    let url = '/lotteryOrdersList';
    return api_common.request('GET', url, null);
  },
  onlineUsers() {
    let url = '/onlineUsers';
    return api_common.request('GET', url, null);
  }
}
