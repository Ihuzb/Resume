/**
 * Created by Administrator on 2016/10/16.
 */
(function (w) {
    function sky(option) {
        this.x = option.x || 0
        this.y = option.y
        this.hua = option.hua
        this.img = option.img
        //ÒÆ¶¯ËÙ¶È
        this.init = 2
    }

    sky.prototype = {
        draw: function () {
            this.hua.drawImage(this.img, this.x, this.y)
        },
        update: function () {
            this.x += -this.init
            if (this.x < -this.img.width) {
                this.x += this.img.width * 2
            }

        }
    }

    w.sky = sky
}(window))
