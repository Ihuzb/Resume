/**
 * Created by Administrator on 2016/10/16.
 */
var util = {
    eath: function (o1, o2) {
        for (var k in o2) {
            if (o2.hasOwnProperty(k)) {
                o1[k] = o2[k]
            }
        }
    }
}
