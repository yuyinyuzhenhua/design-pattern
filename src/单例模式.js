// 单例模式

class SingleObject{
    login(){
        console.log('login...')
    }
}

SingleObject.getInstance = (function(){
    let instance;
    return function(){
        if(!instance){
            return new SingleObject()
        }
        return instance
    }
})()

let o1 = SingleObject.getInstance
let o2 = SingleObject.getInstance
console.log(o1 === o2)

let o3 = new SingleObject()
console.log(o1 === o3)