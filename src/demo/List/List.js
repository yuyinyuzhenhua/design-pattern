import { GET_LIST } from '../config/config'
import $ from 'jquery'
import CreateItem from './CreateItem'


export default class List{
    constructor(app){
        this.app = app
        this.$el = $('<div >')
    }
    init(){
        this.loadData().then(data => {
            console.log(data)
            this.initItemList(data)
        }).then(() => {
            this.render()
        })
    }
    loadData(){
        return fetch(GET_LIST).then(result => {
            return result.json()
        })
    }
    initItemList(data){
        data.forEach(itemData => {
            // 
            let item = CreateItem(this, itemData)
            item.init()
        })
    }
    render(){
        this.app.$el.append(this.$el)
    }
}