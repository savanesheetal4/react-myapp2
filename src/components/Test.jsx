import { useState } from "react"
function Test(){
let [counter,updateName]=useState(0)
    
    return(
        <div>
          <h2>Name of student is:{counter}</h2>  
          
           <button onClick={()=>updateName("Sheetal S Savane")}>State</button>

        </div>
    )
}
export default Test