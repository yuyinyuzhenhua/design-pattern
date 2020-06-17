import { GET_LIST } from '../config/config'
import $ from 'jquery'

export default class List{
    constructor(app){
        this.app = app
        this.$el = $('<div >')
    }
    init(){
        this.loadData().then(data => {
            this.initItemList(data)
        }).then(() => {
            this.render()
        })
    }
    loadData(){
        return fetch(GET_LIST).then(result => {
            console.log(result)
            return result.json()
        })
    }
    initItemList(data){
        data.map(itemData => {
            // 
        })
    }
    render(){
        this.app.$el.append(this.$el)
    }
}