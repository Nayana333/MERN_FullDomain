function car(prefix){
    console.log(`${prefix}details:${this.name},name:${this.model}`);
}

let cars={
    name:'i10',
    model:'grand'

}

car.apply(car,['cars'])