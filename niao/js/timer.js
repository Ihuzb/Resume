/**
 * Created by Administrator on 2016/10/17.
 */
(function (w) {
    function time(shezhi) {
        this.hua = shezhi.hua
        this.time = shezhi.time
    }

    time.prototype = {
        draw: function () {
            this.hua.font = "100 30px 微软雅黑"
            this.hua.textAlign = "right"
            this.hua.textBaseline="top"
            this.hua.fillStyle = "red"
            this.hua.fillText(this.data, this.hua.canvas.width, 0)
        },
        update: function () {
            var cha = Date.now() - this.time
            var housr = Math.floor(cha / (1000 * 60 * 60));
            var minutes = Math.floor(cha % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(cha % (1000 * 60) / 1000);
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds
            this.data = "持续时间:"+housr + "时" + minutes + "分钟" + seconds + "秒"
        }
    }

    w.time = time
}(window))
