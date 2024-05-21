function factory(name){
    return {
        name:name,
        display:function(){
            console.log(name);
        }

    }
}

factory('nayana').display()