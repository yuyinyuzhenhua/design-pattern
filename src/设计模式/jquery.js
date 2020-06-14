class Jquery{
    constructor(selector){
        let slice = Array.prototype.slice
        let doms = slice.call(document.querySelectorAll(selector))
        let len = doms ? doms.length : 0
        for(let i = 0; i < len; i++){
            this[i] = doms[i]
        }
        this.length = len
        this.selector = selector || ''
    }
    addClass(){

    }
    append(node){

    }
    html(data){

    }
}

window.$ = function(selector){
    return new Jquery(selector)
}

let p = $('p')
console.log(p)
console.log(p.addClass)



const { fn } = require("jquery")


// 面试题
// class Jquery{
//     constructor(selector) {
//         let result = document.querySelectorAll(selector)
//         let length = result.length
//         for(let i = 0; i < length; i++) {
//             this[i] = result[i]
//         }
//         this.length = length
//     }
//     get(index) {
//         return this[index]
//     }
//     each(fn) {
//         for(let i = 0; i < this.length; i++) {
//             fn(this[i])
//         }
//     }
//     on(type, fn){
//         return this.each(function(elem){
//             elem.addEventListener(type, fn)
//         })
//     }
// }

// let $p = new Jquery('p')
// console.log($p)
// console.log($p.get(2))
// $p.each(function(e){
//     console.log(e)
// })
// $p.on('click', function(){
//     console.log(111)
// })