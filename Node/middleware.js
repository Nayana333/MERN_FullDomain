const app=require('express')()
function middleware(req,res,next){
    console.log(middleware);
    next()
}
app.use(middleware)

const server=app.get('/',(req,res)=>{
    res.send('server')
})
app.listen(3000,()=>{
    console.log('server start with middleware');
})