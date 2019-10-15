//轮播
class Carousel {
    constructor(root) {
        this.root = root
        this.panels = Array.from(root.querySelectorAll('.panels a'))
        this.dotCt = root.querySelector('.dots')
        this.dots = Array.from(root.querySelectorAll('.dots span'))
        this.pre = root.querySelector('.pre')
        this.next = roor.querySelector('.next')

    }

}