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
    //找当前元素的下标  当前元素的父元素的所有子元素  遍历判断相同元素 相同项的index
    index: function (element) {
        let siblings = element.parentNode.children
        for (let index = 0; index < siblings.length; index++) {
            if (siblings[index] === element) {
                return index
            }
        }
        return -1
    },
    uniqueClass: function () {

    },

}