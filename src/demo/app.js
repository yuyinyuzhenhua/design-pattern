import { isConstructorTypeNode } from "typescript"

import $ from 'jquery'
import ShoppingCart from './ShoppingCart/ShoppingCart.js'
import List from './List/List'

export default class App{
    constructor(id){
        this.$el = $(id)
    }
    init(){
        this.initShoppingCart()
        this.initList()
    }
    initShoppingCart(){
        let shoppingCart = new ShoppingCart(this)
        shoppingCart.init()
    }
    initList(){
        let list = new List(this)
        list.init()
    }
}