// function logCar(){
//     console.log(`brand:${this.brand}, name:${this.name}`);
// }

// const car={
//     brand:'Nissan',
//     name:'sunny'

// }

// logCar.call(car)

// function logCar(prefix){
//     console.log(`${prefix}=brand:${this.brand}, name:${this.name}`);
// }

// const car={
//     brand:'Nissan',
//     name:'sunny'
// }

// logCar.apply(car,['car'])



// function logCar(prefix){
//     console.log(`${prefix}=brand:${this.brand}, name:${this.name}`);
// }

// const car={
//     brand:'Nissan',
//     name:'sunny'
// }

// const output=logCar.bind(car,['car'])
// output()


function carDetails(hello){
    console.log(`${hello}${this.name} price ${this.price}`);
}

let car={
    name:'i10',
    price:'5Lack'
}

const newCar=carDetails.bind(car,['helloww'])
newCar()