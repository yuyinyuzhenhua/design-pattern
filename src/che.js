class Car{
    constructor(name, number){
        this.name = name
        this.number = number
    }
}

class Kuaiche extends Car{
    constructor(name, number){
        super(name, number)
        this.price = 1
    }
}


class Zhuanche extends Car{
    constructor(name, number){
        super(name, number)
        this.price = 2
    }
}

class Trip{
    constructor(car){
        this.car = car
    }
    start(){
        console.log(`车牌号：${this.car.number}, 车名： ${this.car.name}, 价格 0`)
    }
    end(){
        let sum = this.car.price * 5
        console.log(`行程结束,价格${sum}`)
    }
}

let c = new Zhuanche('奥迪', '京AF133424')
let t = new Trip(c)
t.start()
t.end()
console.log(t)



