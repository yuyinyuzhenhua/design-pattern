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