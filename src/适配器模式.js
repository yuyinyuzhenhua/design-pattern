// class Adaptee{
//     specificRequest(){
//         return '德国标准插头'
//     }
// }

// class Target{
//     constructor(){
//         this.Adaptee = new Adaptee()
//     }
//     request(){
//         let info = this.Adaptee.specificRequest()
//         return `${info} - 转换器 - 中国标准插头`
//     }
// }

// let target = new Target()
// console.log(target.request())


// let ajax1;
// ajax1({
//     url: '/get',
//     type: 'post',
//     dataType: 'json'
// })

// // $.ajax({})
// var $ = {
//     ajax1: function(opts){
//         return ajax1(opts)
//     }
// }