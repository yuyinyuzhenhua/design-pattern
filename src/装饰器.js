class Circle{
    draw(){
        console.log('画一个圜')
    }
}

class Decorator{
    constructor(circle){
        this.circle = circle;
    }
    draw(){
        this.circle.draw()
        this.setBorderRed()
    }
    setBorderRed(){
        console.log('加边框')
    }
}

let c = new Circle()
c.draw()

console.log('------------------------')

let d = new Decorator(c)
d.draw()