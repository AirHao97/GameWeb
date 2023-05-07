class Snake {
    //蛇的元素
    //大盒子
    element:HTMLElement
    //蛇头
    head:HTMLElement
    //蛇身体 包括蛇头
    bodies:HTMLCollection

    constructor(){
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div')!
        this.bodies = this.element.getElementsByTagName('div')
    }

    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    set X (value:number) {
        if (this.X === value) {
            return
        }

        if (value < 0 || value >290 ) {
            throw new Error('GAME OVER')
        }

        this.moveBody()

        this.head.style.left =  value + 'px'
   
    }

    set Y (value:number) {
        if (this.Y === value) {
            return
        }

        if (value < 0 || value >290 ) {
            throw new Error('GAME OVER')
        }

        this.moveBody()

        this.head.style.top =  value + 'px'
    }

    //蛇增加身体
    addBody() {
        this.element.insertAdjacentElement("beforeend",document.createElement('div'))
    }

    //蛇移动身体
    moveBody() {
        for (let i = this.bodies.length -1 ; i>0; i--) {
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';

        }
    }
}   

export default Snake