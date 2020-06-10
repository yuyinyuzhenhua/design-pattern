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
            instance = new SingleObject()
        }
        return instance
    }
})()

let o1 = SingleObject.getInstance()
o1.login()
let o2 = SingleObject.getInstance()
o2.login()
console.log(o1 === o2) //true

let o3 = new SingleObject()
console.log(o1 === o3) // false