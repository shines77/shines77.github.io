//
// See: https://xiaojiaolv131.github.io/2017/09/19/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%AE%9E%E7%8E%B0%E8%8F%9C%E5%8D%95%E6%A0%8F%E6%BB%9A%E5%8A%A8%E7%BD%AE%E9%A1%B6%E5%92%8C%E7%82%B9%E5%87%BB%E7%BD%AE%E9%A1%B6/
//
(function() {
    var platform = Util.OS();
    var isFixedBar = false;
    var isStickyBar = false;
    var barTop = 0;
    var barHeight = 200;
    var threshold = 100;

    function initFun() {
        var that = this;
        that.registerScrollEvent();
    }

    /**
     * @method registerScrollEvent
     * @public
     * @return {Null} void
     */
    function registerScrollEvent () {
        var that = this;
        var navbarId = 'navbar';
        if(Util.OS() == 'ios') {
            navbarId = 'navbar';
        }

        $(`#${navbarId}`).css('top', that.barTop + 'px');
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            that.isStickyBar = true;
        } else if (/android/i.test(navigator.userAgent)) {
            $(document).on('scroll', function(event) {
                let scrolltop = document.body.scrollTop;
                if (/android/i.test(navigator.userAgent)) {
                    if (scrolltop >= threshold) {
                        that.isFixedBar = true;
                    } else if (scrolltop < threshold + barHeight) {
                        that.isFixedBar = false;
                    }
                }
            });
        }
    }

    function filterBarClicked () {
        var that = this;
        $('body').scrollTo({toT: that.barTop, durTime : 200});
    }
})();

function createAutoScroll() {
    var that = this;
    that.initFun();
}