class ReadImg{
    constructor(fileName){
        this.fileName = fileName
        this.loadFromDisk()
    }
    display(){
        console.log('display...' + this.fileName)
    }
    loadFromDisk(){
        console.log('loading...' +this.fileName)
    }
}

class ProxyImg{
    constructor(fileName){
        this.ReadImg = new ReadImg(fileName)
    }
    display(){
        this.ReadImg.display()
    }
}

let p = new ProxyImg('1.png')
p.display()