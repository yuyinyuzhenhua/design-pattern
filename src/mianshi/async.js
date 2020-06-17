
import regeneratorRuntime from "regenerator-runtime";

// 相当于Promise
async function fn(){
    return 100
}

// const res = fn()
// res.then(data => {
//     console.log(data)
// })
// console.log(res)


// !(async function(){
//     const p1 = Promise.resolve(300)
//     const data = await p1   //await 相当于 Promise then
//     console.log('data', data)
// })()


// !(async function(){
//     const data = await 400    // 
//     console.log('data', data)
// })()

// !(async function(){
//     const data = await fn()
//     console.log('data', data)
// })()


// !(async function(){
//     const p4 = Promise.reject('some err')
//     try{
//         const res = await p4
//         console.log(res)
//     } catch (err) {
//         console.log(err)
//     }
// })()


// !(async function(){
//     const p4 = Promise.reject('some err')
//     const res = await p4
//     console.log(res)
// })()
