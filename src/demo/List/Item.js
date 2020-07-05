import $ from 'jquery'
import getCart from '../ShoppingCart/GetCart'
import StateMachine from 'javascript-state-machine'
import { log } from '../util/log'

export default class Item {
    constructor(list, data){
        this.list = list
        this.data = data
        this.$el = $('<div>')
        this.cart = getCart()
    }
    init(){
        this.initContent()
        this.initBtn()
        this.render()
    }
    initContent(){
        let data = this.data
        let $el = this.$el
        $el.append($(`<p>名称：${data.name}</p>`))
        $el.append($(`<p>价格：${data.price}</p>`))
    }
    initBtn(){
        let $el = this.$el
        let $btn = $(`<button>--</button>`)
        let _this = this
        // 状态模式
        let fsm = new StateMachine({
            init: '加入购物车',
            transitions: [
                {
                    name: 'addToCart',
                    from: '加入购物车',
                    to: '从购物车删除'
                },
                {
                    name: 'deleteFromCart',
                    from: '从购物车删除',
                    to: '加入购物车'
                }
            ],
            methods: {
                onAddToCart: function(){
                    _this.addToCartHandle()
                    updateText()
                },
                onDeleteFromCart: function(){
                    _this.deleteFromCartHandle()
                    updateText()
                }
            }
        })

        function updateText(){
            $btn.text(fsm.state)
        }

        updateText()
        $btn.click(() => {
            if(fsm.is('加入购物车')){
                fsm.addToCart()
            } else {
                fsm.deleteFromCart()
            }
        })
        $el.append($btn)
    }

    @log('add')
    addToCartHandle(){
        this.cart.add(this.data)
    }
    @log('del')
    deleteFromCartHandle(){
        this.cart.del(this.data.id)
    }
    render(){
        this.list.$el.append(this.$el)
    }
}