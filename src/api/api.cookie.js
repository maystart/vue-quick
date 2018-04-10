let cookie = {
  set: function(key, val, time) {
    let date = new Date();
    let expiresDays = time;
    date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
    document.cookie = key + "=" + val + ";expires=" + date.toGMTString();
  },
  get: function(key) {
    let getCookie = document.cookie.replace(/[ ]/g, "");
    let arrCookie = getCookie.split(";")
    let tips;
    for (let i = 0; i < arrCookie.length; i++) {
      let arr = arrCookie[i].split("=");
      if (key == arr[0]) {
        tips = arr[1];
        break;
      }
    }
    return tips;
  },
  getAll: function() {
    let getCookie = document.cookie.replace(/[ ]/g, "");
    let arrCookie = getCookie.split(";")
    return arrCookie;
  }
}
export default cookie;
