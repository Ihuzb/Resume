/**
 * Created by Administrator on 2016/10/18.
 */
function huabu(weizhi,width,height) {
    var canvas = document.createElement("canvas")
    weizhi && (document.getElementById(weizhi).appendChild(canvas))
    width && (canvas.width=width)
    height && (canvas.height=height)
    return canvas.getContext("2d")
}
