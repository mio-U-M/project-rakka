window.UA = {};

// UserAgent
var ua = window.navigator.userAgent;
window.UA.isPC = (function() {
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0) {
        return false;
    } else {
        return true;
    }
})();

if (!UA.isPC) {
    var wrapper = document.getElementById("wrapper");
    var wrapperHeight = window.innerHeight;
    wrapper.style.height = wrapperHeight + "px"
}