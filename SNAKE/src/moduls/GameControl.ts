//游戏控制器
import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'

class GameControl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    deriction: string = ''
    isLive:boolean = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel(10, 10)

        this.init()
    }

    //游戏初始化方法，调用后游戏即开始
    init() {
        //绑定键盘事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    //键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        this.deriction = event.key
        console.log(this.deriction)
    }
    //控制蛇移动的方法
    run() {
        //获取蛇现在的坐标
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.deriction) {
            case "ArrowUp":
            case "Up":
                Y -= 10
                break;
            case "ArrowDown":
            case "Down":
                Y += 10
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10
                break;
            case "ArrowRight":
            case "Right":
                X += 10
                break;
        }

        this.checkEat(X,Y)

        try{
            this.snake.X = X
            this.snake.Y = Y
        }catch(e:any) {
            alert(e.message)
            this.isLive = false
        }


        this.isLive && setTimeout(
            this.run.bind(this),300 - (this.scorePanel.level-1)*30
        )
    }

    checkEat(x:number,y:number) {
        if(x===this.food.x && y===this.food.y){
            this.snake.head.setAttribute('class','eat')
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
        setTimeout(() => {
            this.snake.head.setAttribute('class','')
        }, 2000);
    }
}

export default GameControl