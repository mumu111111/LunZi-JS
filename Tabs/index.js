
class Tabs {
    constructor(options) {
        //data
        let defaultOptions = {
            element: '',
            navSelector: '[data-role="tabs-nav"]',
            panesSelector: '[data-role="tabs-panes"]',
            activeClassName: 'active'
        }
        //合并data
        this.options = Object.assign({}, defaultOptions, options)
        this.checkOptions().bindEvents().setDefaultTab()
    }
    checkOptions() {
        if (!this.options.element) { //判断element是否存在
            throw new Error('element is require')
        }
        //方便调用this的其他方法
        return this
    }
    //tab点击切换事件
    bindEvents() {
        dom.on(this.options.element, 'click', `${this.options.navSelelctor}>li`, (e, el) => {
            let index = dom.index(el)
            //获取nav下标
            //获取所有panel 方便找对应panel
            let children = this.options.element.querySelelctor(this.options.panesSelector).children
            //为当前元素 加焦点状态
            dom.uniqueClass(el, this.options.activeClassName)
            dom.uniqueClass(children[index], this.options.activeClassName)


        })
        return this
    }
    setDefaultTab() {
        //默认状态
        this.options.element.querySelelctor(`$(this.options.navSelector)>li:first-child`).click()
        return this
    }
}

















