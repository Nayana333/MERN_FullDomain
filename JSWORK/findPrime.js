function prime(arr){
    let arrays=[]
    for(let i=0;i<arr.length;i++){
        for(let j=2;j<arr.length;j++){
            if(arr[i]%j===0){
                console.log(arr[i]);
            }
        }

        }
        console.log(arrays);
    }
prime([4,6,7,4,1,3])