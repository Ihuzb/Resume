/**
 * Created by Administrator on 2016/10/17.
 */
(function (w) {
    function dadi(shuxing) {
        this.x = shuxing.x
        this.hua = shuxing.hua
        this.img = shuxing.img
        this.y = shuxing.y


        this.init = 2
    }

    dadi.prototype = {
        draw: function () {
            this.hua.drawImage(this.img, this.x, this.y)
        },
        update: function () {
            this.x -= this.init
            if (this.x <= -this.img.width) {
                this.x += this.img.width * 4
            }
        }
    }

    w.dadi = dadi
}(window))
