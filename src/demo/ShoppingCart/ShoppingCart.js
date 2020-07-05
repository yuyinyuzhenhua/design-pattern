import $ from 'jquery'
import getCart from '../ShoppingCart/GetCart'

export default class ShoppingCart{
    constructor(app) {
        this.app = app
        this.cart = getCart()
        this.$el = $('<div>').css({
            'marginBottom': '20px',
            'border-bottom': '1px solid red'
        })
    }
    init(){
        this.initBtn()
        this.render()
    }
    initBtn(){
        let $btn = $('<button>购物车</button>')
        $btn.click(() => {
            this.showCart()
        })
        this.$el.append($btn)

    }
    showCart(){
        alert(this.cart.getList())
    }
    render(){
        this.app.$el.append(this.$el)
    }
}