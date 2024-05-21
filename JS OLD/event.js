const eventEmitter=require('event')
let myEvent=new eventEmitter()

let eventHandler=()=>{
    console.log('handler');
}

myEvent.on('myevents',eventHandler)
myEvent.emit(myevents)