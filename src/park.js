class Place{
    constructor(){
        this.empty = true
    }
    in(){
        this.empty = false
    }
    out(){
        this.empty = true
    }
}


class Car{
    constructor(num){
        this.num = num
    }
}

class Camera{
    shot(car){
        return {
            num: car.num,
            inTime: Date.now()
        }
    }
}

class Floor{
    constructor(index, places){
        this.index = index
        this.places = places || []
    }
    emptyPlaceNum(){
        let sum = 0;
        this.places.forEach(item => {
            if(item.empty){
                sum++
            }
        })
        return sum
    }
}

class Screen{
    show(car, inTime){
        console.log('车牌号' , car.num)
        console.log('停车时间', Date.now() - inTime)
    }
}

class Park{
    constructor(floors){
        this.floors = floors || []
        this.camera = new Camera()
        this.screen = new Screen()
        this.carList = {}
    }
    in(car){
        const info = this.camera.shot(car)
        const i = parseInt(Math.random() * 100)
        console.log(i)
        const place = this.floors[0].places[i]
        place.in()
        info.place = place
        // 记录信息
        this.carList[car.num] = info
    }
    out(car){
        // 获取信息
        const info = this.carList[car.num]
        // 将停车位清空
        const place = info.place
        place.out()
        // 显示时间
        this.screen.show(car, info.inTime)
        // 清空记录
        delete this.carList[car.num]
    }
    emptyNum(){
        return this.floors.map(floor => {
            return `${floor.index} 层还有 ${floor.emptyPlaceNum()}`
        }).join('\n')
    }
}


// test
const floors = []
for(let i = 0; i < 3; i++){
    const places = []
    for (let j = 0; j < 100; j++) {
        places[j] = new Place()
    }
    floors[i] = new Floor(i+1, places)
}

const park = new Park(floors)

const c1 = new Car('A1')
const c2 = new Car('B2')
const c3 = new Car('C3')

// console.log('第一辆车进入')
park.in(c1)
park.in(c2)
// park.in(c3)
console.log(park.emptyNum())
// park.out(c1)
// park.out(c2)
// console.log(park.emptyNum())