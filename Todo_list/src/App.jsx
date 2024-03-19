import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
 const [text,settext] = useState(""); //this is hooks function
const [Array,setArray] = useState([]);
const [id,setid] = useState([]);
const [show,setshow] = useState(true);

const handlle = (data)=>{

  settext(data.target.value)
}

const handlleDelate = (id)=>{

  let todoDeleate = Array.filter((el,index)=> index!=id)

 setArray(todoDeleate)
 console.log(todoDeleate)
}
  

const handlleEdit= (val , id)=>{

  setid(id)
  settext(val)
  setshow(false)
 console.log(val,id)
}
  

const handlleUpdate = ()=>{

  let update = [...Array]
  update[id] = text
  setArray(update)
  settext("")
  setshow(true)
console.log(id)
  
}
  


const handlleClick = ()=>{

  if(text !=""){
    setArray((el)=>[...el,text]);
    settext("")

  }

}
console.log(Array)

  return (
    <>
    <div className='container'>
    <input 
    className='input form-control' 
    type="text" 
    
    onChange={handlle}
    
    value={text}

    
    />

  {
    show? (
<button 
    className='inputb'
      onClick={handlleClick}
      

      >Add
      </button>

    )
    :(
      <button className='inputbc'
      
      onClick={handlleUpdate}
      
      
      >
        Update
      </button>
    )

  }

    
      <div>
        <ul className='padding '>

          {Array.map((el,index) => (

                <li className='' key={index}>

                  {el}
            <button className='ed_lf'
            
            onClick={()=> handlleEdit(el,index)}
            
            
            >
              Edit
            </button>

            <button 
             className='left'

             onClick={()=> handlleDelate(index)}

            >
              
              Deleate</button>
          </li>
          
          ))}

        
        </ul>
      </div>
    </div>
   
     
    </>
  )
}

export default App
