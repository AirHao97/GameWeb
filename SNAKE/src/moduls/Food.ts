//定义food类
class Food {
    //定义食物所定义的元素
    element: HTMLElement;

    constructor() {
        //获取页面中food元素并将其赋值给element
        this.element = document.getElementById('food')!;
    }

    //获取食物坐标
    get x() {
        return this.element.offsetLeft;
    }
    get y() {
        return this.element.offsetTop
    }
    //修改食物位置的方法 生成随机的位置
    change(){
        let left:number = Math.round(Math.random() * 29) * 10
        let top:number = Math.round(Math.random() * 29) * 10
        this.element.style.left = left +"px"
        this.element.style.top = top + "px"
    }
}

export default Food