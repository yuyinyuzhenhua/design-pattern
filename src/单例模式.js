// // 单例模式

// class SingleObject{
//     login(){
//         console.log('login...')
//     }
// }

// SingleObject.getInstance = (function(){
//     let instance;
//     return function(){
//         if(!instance){
//             instance = new SingleObject()
//         }
//         return instance
//     }
// })()

// let o1 = SingleObject.getInstance()
// o1.login()
// let o2 = SingleObject.getInstance()
// o2.login()
// console.log(o1 === o2) //true

// let o3 = new SingleObject()
// console.log(o1 === o3) // false




// 单利模式 --- 登录框
class LoginForm{
    constructor(){
        this.state = 'hide'
    }
    show(){
        if(this.state === 'show'){
            alert('登录框已经显示')
            return
        }
        this.state = 'show'
        console.log('登录框显示')
    }
    hide(){
        if(this.state === 'hide'){
            alert('登录框已经隐藏')
            return
        }
        this.state = 'hide'
        console.log('登录框隐藏')
    }
}

LoginForm.getInstance = (function(){
    let instance = null;
    return function(){
        if(instance === null){
            instance = new LoginForm()
        }
        return instance;
    }
})()

let p1 = LoginForm.getInstance()
p1.show()
let p2 = LoginForm.getInstance()
p1.hide()

console.log(p1 === p2) // true