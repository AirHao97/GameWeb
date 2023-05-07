//生成记分牌的类
class ScorePanel {
    score:number = 0
    level:number = 1
    scoreEle:HTMLElement
    levelEle:HTMLElement
    maxLevel:number
    upScore:number

    constructor(maxLevel:number = 10,upScore:number = 10){
        this.maxLevel = maxLevel
        this.upScore = upScore
        this.scoreEle = document.querySelector('#score')!
        this.levelEle = document.getElementById("level")!
    }
    //加分
    addScore() {
        this.score++
        this.scoreEle.innerHTML = this.score + ""
        this.upScore = 10 * this.level
        if(this.score % this.upScore === 0){
            this.levelUp()
        }
     }
    //升级
    levelUp() {
        if(this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ""
        }
    }

}

export default ScorePanel