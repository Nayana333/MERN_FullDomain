// function Factory(name,age){
//     return {
//         name:name,
//         age:age,
//         display:function(){
//             console.log(`${name} has ${age}`);
//         }
//     }
// }

// Factory('nayana',17).display()


function factory(name,age){
    return {
        name:name,
        age:age,
        display:function(){
            console.log(`${this.name} has ${this.age}`);
        }
    }

}

factory('nayana',21).display()