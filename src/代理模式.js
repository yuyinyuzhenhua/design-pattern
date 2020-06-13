// class ReadImg{
//     constructor(fileName){
//         this.fileName = fileName
//         this.loadFromDisk()
//     }
//     display(){
//         console.log('display...' + this.fileName)
//     }
//     loadFromDisk(){
//         console.log('loading...' +this.fileName)
//     }
// }

// class ProxyImg{
//     constructor(fileName){
//         this.ReadImg = new ReadImg(fileName)
//     }
//     display(){
//         this.ReadImg.display()
//     }
// }

// let p = new ProxyImg('1.png')
// p.display()







let star = {
    name: '张艺兴',
    age:20,
    phone: 15820212578
}

let agent = new Proxy(star, {
    get: function(target, key){
        if(key === 'phone') {
            return 'agent: 15820354569'
        } else if (key === 'price') {
            return 120000
        }
        return target[key]
    },
    set: function(target, key, val){
        if (key === 'customePrice') {
           if(val < 100000) {
                throw new Error('价格太低')
           } else {
               target[key] = val
               return true
           }
        }
    }
})


console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
agent.customePrice = 900000
