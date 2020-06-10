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