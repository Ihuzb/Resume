/**
 * Created by Administrator on 2016/10/2.
 */
/**
 * Created by Administrator on 2016/9/8.
 */
$(function () {
    $('#dowebok').fullpage({
        sectionsColor: ['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        loopHorizontal: false,
        "scrollingSpeed": 600,
        slidesNavigation: true,
        afterSlideLoad: function (link, index) {
            $(".two .visible-lg .hei .zhuyao").css("display","none")
            setTimeout(function () {
                $(".two .visible-lg .hei").addClass("current")
            }, 100)
            setTimeout(function () {
                $(".two .visible-lg .hei .zhuyao").css("display","block")
                $(".two .visible-lg .hei .zhuyao").addClass("current")
            }, 1)
            setTimeout(function () {
                $(".two .visible-lg .bai").addClass("current")
            }, 100)
        },
    });
});



