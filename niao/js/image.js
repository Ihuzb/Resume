/**
 * Created by Administrator on 2016/10/18.
 */
function getImae(image, callback) {
    var keys = Object.keys(image)
    var i = 0, len = keys.length, key, img, imgeObj={}, imgLoadd = 0
    for (; i < len; i++) {
        key = keys[i]
        img = new Image()
        img.src = image[key]
        imgeObj[key] = img
        img.addEventListener("load", function () {
            if (++imgLoadd >= len) {
                callback(imgeObj)
            }
        })

    }
}