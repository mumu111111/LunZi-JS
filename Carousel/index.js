//轮播
class Carousel {
    constructor(root) {
        //data
        this.root = root
        this.panels = Array.from(root.querySelectorAll('.panels a'))
        this.dotCt = root.querySelector('.dots')
        this.dots = Array.from(root.querySelectorAll('.dots span'))
        this.pre = root.querySelector('.pre')
        this.next = roor.querySelector('.next')
        this.bind()
    }
    //绑定事件 似mounted
    bind() {
        //dot点击 显示当前img
        //事件委托 
        this.dotCt.onclick = e => {
            if (e.target !== 'SAPN') return //判断是不是子元素span
            let index = this.dots.indexOf(e.target) //找下标
            //增加焦点状态 + 展示点击dot对应img
            this.setDot(index)
            this.showPage(index)
        }


        //pre/next点击 显示上/下一个img

    }

    //用到的方法们
    setDot(index) {
        this.dots.forEach(dot => {
            dot.classList.remove('active')
            this.dots[index].classList.add('active')
        })
    }
    showPage(index) {
        this.panels.forEach(panel => {
            panel.style.zIndex = 0
            this.panels[index].style.zIndex = 1
        })
    }

}