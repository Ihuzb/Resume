/**
 * Created by Administrator on 2016/10/16.
 * x С��ĳ�ʼλ��
 * y С��ĳ�ʼλ��
 * hua ����
 * img ͼƬ
 * hang һ�м���
 * lie һ�м���
 * imgW ͼƬ�Ŀ�
 * imgH ͼƬ�ĸ�
 * oneH һ�������ĸ�
 * oneW һ�������Ŀ�
 */
(function (w) {
    function bird(shuxing) {
        this.x = shuxing.x
        this.y = shuxing.y
        this.hua = shuxing.hua
        this.img = shuxing.img
        this.hang = shuxing.hang
        this.lie = shuxing.lie
        this.imgW = shuxing.img.width
        this.imgH = shuxing.img.height
        this.oneH = this.imgH / this.hang
        this.oneW = this.imgW / this.lie
        this.w = shuxing.w || this.oneW
        this.h = shuxing.h || this.oneH
        this.init = 0
        this.xia = 1
        this.xiaplus = 0.05
        this.shang = 1
        this.shangplus = 0.05
        this._sheng()
    }

    util.eath(bird.prototype, {
        draw: function () {
            this.hua.save()
            this.hua.translate(this.x + this.oneW / 2, this.y + this.oneH / 2)
            var dushu = this.xia * 10
            dushu = dushu > 90 ? 90 : dushu
            this.hua.rotate(Math.PI / 180 * dushu)
            this.hua.drawImage(this.img,
                this.oneW * this.init, 0, this.oneW, this.oneH,
                -this.oneW / 2, -this.oneH / 2, this.w, this.h
            )
            this.hua.restore()
        },
        update: function () {
            this.init = ++this.init < this.lie - 1 ? this.init : 0
            this.y += this.xia
            this.xia += this.xiaplus

        },
        _sheng: function () {
            var th = this
            this.hua.canvas.addEventListener("click", function () {
                th.xia = -th.shang
            })


        }
    })
    w.bird = function (shuxing) {
        return new bird(shuxing)
    }
}(window))
