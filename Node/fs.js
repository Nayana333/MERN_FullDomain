//read



fs.readFile('filename','utf8',(err,data)=>{
    if(err){
        throw err
    }
    console.log(data);
})


const data=fs.readFileSync('filename','utf8')
console.log(data);

//write
fs.writeFile('filename',newdata,'utf8',(err)=>{
    if(err){
        throw err
    }
    console.log('wrote');
})
fs.writeFileSync('filename',newdata,'utf8')
console.log('file written successfully');
//information

fs.stat('filename.js',(err,status)=>{
    if(err){
        console.log(err);
    }
    console.log(status);
})

const status=fs.statSYnc('filename.js')
console.log(status);
//rename

fs.rename('middleware.js','new.js',(err)=>{
    if(err){
        throw err
    }
    console.log('renamed successfully');
})

fs.renameSync('file.js','newFile.js')
console.log('renamed');

//delete

fs.unlink('filename.js',(err)=>{
    if(err){
        throw err
    }
    console.log('deleted');
})

fs.unlinkSync('filename.js')
console.log('deleted');
