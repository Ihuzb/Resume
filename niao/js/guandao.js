/**
 * Created by Administrator on 2016/10/17.
 */
(function (w) {
    function guandao(shezhi) {
        this.x = shezhi.x
        this.hua = shezhi.hua
        this.imgS = shezhi.imgS
        this.imgX = shezhi.imgX
        this.width = this.imgS.width
        this.height = this.imgS.height
        this._suiji()
        this.init = 1

    }

    guandao.prototype = {
        draw: function () {
            this.hua.drawImage(this.imgS, this.x, this.Sy, this.width, this.height)
            this.hua.drawImage(this.imgX, this.x, this.Xy, this.width, this.height)
            this._huizhi()
        },
        update: function () {
            this.x -= this.init
            if (this.x <= -this.imgS.width) {
                this.x += 300 + this.imgS.width * 3 * 6
                this._suiji()
            }
        },
        _suiji: function () {
            var yy = Math.random() * 250 + 50
            this.Sy = yy - this.height
            this.Xy = yy + (Math.random() * 60) + 60
        },
        _huizhi: function () {
            this.hua.rect(this.x, this.Sy, this.width, this.height)
            this.hua.rect(this.x, this.Xy, this.width, this.height)
            //this.hua.stroke()
        }
    }

    w.guandao = guandao
}(window))
