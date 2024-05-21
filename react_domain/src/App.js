
// import { useState } from 'react';
// import './App.css';

// import { useEffect, useState } from "react"

// function App() {
//   const [count,setCount]=useState(0)
//   const increment=()=>{
//     setCount(count+1)
//   }
//   const decrement=()=>{
//     setCount(count-1)
//   }
//   return (
//     <div className="App">
//       <h1>count:{count}</h1>
//       <button onClick={increment}>increment</button>
//       <button onClick={decrement}>decrement</button>   
//     </div>
//   );
// }

// export default App;


// import React from 'react'

// import { useState,useEffect } from "react"
// function App(){

//   const [count,setCount]=useState(0)
//   const [data,setData]=useState([])
//   const increment=()=>{
//     setCount(count+1)
//   }
// useEffect(()=>{
// // //   fetch('https://jsonplaceholder.typicode.com/users/count').then(response.json()).then((data)=>setData(data))
// fetch('https://jsonplaceholder.typicode.com/users/count')
//       .then(response => response.json())
//       .then(data => setData(data))

//  },[count])



//   return(
    
//        <div>
      
//       <button onClick={increment}>add</button>
//       {data.map(value=>(<div>
//         <h3>{value.id}:{value.name}</h3>
//         </div>))}
//     </div>

   
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const App = () => {
//   const [data,setData]=useState([])
//   useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/users').then(response=>setData(response.data))
//   })

//   return (
//     <div>
//       {data.map((item)=>{
//         <div>
//           <p>{item.name}</p>
//           </div>
//       })}
      
//     </div>
//   )
// }

// export default App


// import React, { useCallback, useState } from 'react'

// const App = () => {
//   const [count,setCount]=useState(0)
//   const increment=useCallback(()=>{
//     setCount(count+1)
//   },[])
//   return (
//     <div>
//       <h1>count:{count}</h1>
//       <button onClick={increment}>incremnt</button>

      
//     </div>
//   )
// }

// export default App

// import React, { useMemo, useState } from 'react'

// const App = () => {
//   const [a,setA]=useState(0)
//   const [b,setB]=useState(0)

//   let sum=useMemo(()=>{
//     return parseInt(a)+parseInt(b)
//   },[a,b])
//   return (
//     <div>
//       <h1>sum:{sum}</h1>
//      A <input type='text' onChange={(e)=>{setA(e.target.value)}}></input>
//     B  <input type='text' onChange={(e)=>{setB(e.target.value)}}></input>
//     </div>
//   )
// }

// export default App

// import React, { Suspense } from 'react'

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default React.memo(App)

// import { Suspense } from 'react'
// import React from 'react'
// const LazyComponent=React.lazy(()=>{
//   return import ('./LazyComponent')
// })

// const App = () => {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading....</div>}>
//         <LazyComponent/>
//       </Suspense>
      
//     </div>
//   )
// }

// export default App

// import React, { useReducer } from 'react'
// const reducer=((state,action)=>{
//   switch(action.type){
//     case 'increment':
//       return {count:state.count+1}
//   }

// })

// const App = () => {
//   const[state,dispatch]=useReducer(reducer,{count:0})
//   return (
//     <div>
//       <h1>count:{state.count}</h1>
//       <button onClick={(e)=>{dispatch({type:'increment'})}}>Increment</button>
//     </div>
//   )
// }

// export default App



// import React, { useReducer } from 'react'

// const reducer=((state,action)=>{
//   switch(action.type){
//     case 'increment':{
//       return {count:state.count+1}
//     }
//     case 'decrement':{
//       return {count:state.count-1}
//     }
//   }
// })

// const App = () => {
//   const [state,dispatch]=useReducer(reducer,{count:0})
//   return (
//     <div>
//       <h1>count:{state.count}</h1>
//       <button onClick={(e)=>{dispatch({type:'increment'})}}>increment</button>
      
//     </div>
//   )
// }

// export default App


//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------







// import React from 'react'
// import store from './CounterStore'
// import CounterComponent from './CounterComponent'
// import { Provider } from 'react-redux'

// const App = () => {

//   return (
//     <Provider store={store}>
//       <CounterComponent/>
//     </Provider>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(1)
  let increment=()=>{
   setInterval(()=>{
        

    setCount(count+1)
          
        
    },1000)
   
  }
  let decrement=()=>{
    
    setInterval(()=>{
        
    setCount(count-1)
                
    },1000)
  }
 
  return (
    <div>
      <h1>count={count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default App


