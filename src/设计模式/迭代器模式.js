// class Iterator{
//     constructor(container) {
//         this.list = container.list
//         this.index = 0
//     }
//     hasNext(){
//         if (this.index > this.list.length) {
//             return false
//         }
//         return true
//     }
//     next(){
//         if(this.hasNext()){
//             return this.list[this.index++]
//         }
//         return null
//     }
// }

// class Container{
//     constructor(list) {
//         this.list = list
//     }
//     getIterator(){
//         return new Iterator(this)
//     }
// }

// let a = new Container([11, 22, 33, 44, 55, 66])
// let p = a.getIterator()
// while(p.hasNext()) {
//     console.log(p.next())
// }






function each(data){
    let p = data[Symbol.iterator]()

    let item = {value: null, done: false}
    while(!item.done) {
        item = p.next()
        console.log(item.value)
    }
}

let arr = [11, 22, 33, 44, 55, 66]
var nodelist = document.getElementsByTagName('p')
var m = new Map()
m.set('a', 100)
m.set('b', 200)

each(arr)
each(nodelist)
each(m)


