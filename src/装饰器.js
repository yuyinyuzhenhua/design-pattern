// class Circle{
//     draw(){
//         console.log('画一个圜')
//     }
// }

// class Decorator{
//     constructor(circle){
//         this.circle = circle;
//     }
//     draw(){
//         this.circle.draw()
//         this.setBorderRed()
//     }
//     setBorderRed(){
//         console.log('加边框')
//     }
// }

// let c = new Circle()
// c.draw()

// console.log('------------------------')

// let d = new Decorator(c)
// d.draw()










// @testDesc
// class Demo{

// }

// function testDesc(target){
//     target.isDes = true
// }
// alert(Demo.isDes)

// function mixins(...list){
//     return function(target){
//         Object.assign(target.prototype, ...list)
//     }
// }

// const Foo = {
//     foo(){
//         alert('foo')
//     }
// }

// @mixins(Foo)
// class MyClass{

// }

// let obj = new MyClass()
// obj.foo()




// class Person{
//     constructor(){
//         this.first = 'A'
//         this.last = 'B'
//     }

//     @readOnly
//     name(){
//         console.log(`${this.first} - ${this.last}`)
//     }
// }

// function readOnly(target, name, descriptor){
//     descriptor.writable = false
//     return descriptor
// }

// let p = new Person()
// p.name()
// p.name = function(){alert(1)}
// p.name()



// function log(target, key, descriptor){
//     let oldVal = descriptor.value
//     descriptor.value = function(){
//         console.log(`calling ${key}`, arguments)
//         return oldVal.apply(this, arguments)
//     }
//     return descriptor
// }

// class Math{
//     @log
//     add(a, b){
//         return a + b
//     }
// }

// let m = new Math()
// const result = m.add(1, 2)





import { readonly, deprecate } from 'core-decorators'

class Person{
    // @readonly
    @deprecate('即将废弃', {url: 'www.baidu.com'})
    name(){
        console.log('zhang san')
    }
}

let p = new Person()
p.name()
