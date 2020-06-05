function loadImg(url){
    const promise = new Promise((resolve, reject) => {
        var img = document.createElement('img')
        img.onload = function(){
            resolve(img)
        }
        img.onerror = function(err) {
            reject('图片加载失败')
        }
        img.src = url
    })
    return promise
}
const url = 'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=659172450,2429547260&fm=58'
let result = loadImg(url)
result.then(img => {
    console.log(img.width)
    return img
}).then(img => {
    console.log(img.height)
}).catch(err =>{
    console.log(err)
})