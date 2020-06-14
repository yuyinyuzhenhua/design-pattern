// then catch 正常都返回promise  报错返回reject

// const p1 = Promise.resolve().then(() => {
//     return 100
// })
// // console.log('p1', p1)
// p1.then(() => {
//     console.log(123)
// }).catch(err => {
//     console.log('err', err)
// })


// const p2 = Promise.resolve().then(() => {
//     throw new Error('then error')
// })
// // console.log('p2', p2)
// p2.then(() => {
//     console.log(456)
// }).catch(err => {
//     console.log('err:', err)
// })


const p3 = Promise.reject('err').catch(err => {
    console.log(err)
})
// console.log('p3', p3)
p3.then(() => {
    console.log(100)
})

const p4 = Promise.reject('mt error').catch(err => {
    throw new Error('catch error')
})
// console.log('p4', p4)
p4.then(() => {
    console.log(200)
}).catch(err => {
    console.log('some err')
})




