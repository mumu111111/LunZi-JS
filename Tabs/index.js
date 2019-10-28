
class Tabs {
    constructor(options) {
        //data
        let defaultOptions = {
            element: '',
            navSelector: '[data-role="tab-nav"]',
            panesSelector: '[data-role="tab-panes"]',
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
        dom.on(this.options.element, 'click', `${this.options.navSelector}>li`, (e, el) => {
            let index = dom.index(el)
            //获取nav下标
            //获取所有panel 方便找对应panel
            let children = this.options.element.querySelector(this.options.panesSelector).children
            //为当前元素 加class 实现焦点状态
            console.log('chilren' + children)
            dom.uniqueClass(el, this.options.activeClassName)
            dom.uniqueClass(children[index], this.options.activeClassName)


        })
        return this
    }
    setDefaultTab() {
        console.log(1)
        //默认Tab状态
        console.log('第一个tab元素对象' + this.options.element.querySelector(`${this.options.navSelector}>li:first-child`))

        this.options.element.querySelector(`${this.options.navSelector}>li:first-child`).click()
        return this
    }
}





