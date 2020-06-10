// @testDesc
// class Demo{

// }

// function testDesc(target){
//     target.isDes = true
// }
// alert(Demo.isDes)

function mixins(...list){
    return function(target){
        Object.assign(target.proto)
    }
}