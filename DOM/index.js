let dom = {
    //事件委托  当触发事件 判断是不是当前父元素的子元素 如果是 则执行fn 
    on: function (element, eventType, selector, fn) {
        element.addEventListener(eventType, e => {
            let el = e.target
            while (!el.matches(selector)) {
                if (element === el) {
                    el = null
                    break
                }
                el = el.parentNode
            }
            el & fn.call(el, e, el)
        })
        return element
    },
    index: function (element) {

    },
    uniqueClass: function () {

    },

}