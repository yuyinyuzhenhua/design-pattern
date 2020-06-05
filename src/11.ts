class People{
    public name
    public age
    protected weight  //自己 或者 子类可以访问
    constructor(name, age){
        this.name = name
        this.age = age
        this.weight = 120
    }
    eat(){
        console.log(`${this.name} eat something`)
    }
    speak(){
        console.log(`My name is ${this.name}, age ${this.age}`)
    }
}

class Students extends People{
    public number
    private girlfriend

    constructor(name, age, number ){
        super(name, age)
        this.number = number
        this.girlfriend = 'xiaoli'
    }
    study(){
        console.log(`${this.name} study`)
    }
    getWeight(){
        console.log(`weight ${this.weight}`)
    }
}

let xm = new Students('xiaoming', 10, 'A1')
xm.getWeight()
// console.log(Students.girlfriend)
// console.log(xm.girlfriend)
// console.log(xm.weight)