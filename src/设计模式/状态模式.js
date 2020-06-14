// class State{
//     constructor(color){
//         this.color = color
//     }
//     handle(context) {
//         console.log(`turn to ${this.color} light`)
//         context.setState(this)
//     }
// }


// // 主体
// class Context{
//     constructor() {
//         this.state = null
//     }
//     getState() {
//         return this.state
//     }
//     setState(state) {
//         this.state = state
//     }
// }

// let context = new Context()

// let green1 = new State('green')
// let red1 = new State('red')
// let yellow1 = new State('yellow')

// green1.handle(context)
// console.log(context.getState())

// red1.handle(context)
// console.log(context.getState())

// yellow1.handle(context)
// console.log(context.getState())



import StateMachine from 'javascript-state-machine'
import $ from 'jquery'
import { updateJsxText } from 'typescript'

// 初始化状态机
let fsm = new StateMachine({
    init: '收藏',
    transitions: [
        {
            name: 'doStore',
            from: '收藏',
            to: '取消收藏'
        },
        {
            name: 'deleteStore',
            from: '取消收藏',
            to: '收藏'
        }
    ],
    methods: {
        onDoStore: function() {
            alert('收藏成功')
            updateText()
        },
        onDeleteStore() {
            alert('取消收藏成功')
            updateText()
        }
    }
})

var $btn = $('#btn')
$btn.click(function(){
    if(fsm.is('收藏')) {
        fsm.doStore()
    } else {
        fsm.deleteStore()
    }
})


function updateText() {
    $btn.text(fsm.state)
}

updateText()
