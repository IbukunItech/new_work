import React from 'react'
import {BiLeftArrow, BiRightArrow} from "react-icons/bi"
import "./HomePage.css"

const HomePage = () => {
    const [text, setText] = useState([])
    return (
        <div className="container">
            <div className="container_1">
               <div className="button"><BiLeftArrow /></div>
               <div className= "container_Pix">
                   <div>display</div>
                   <div>input</div>
               </div>
               <div>This is a prep class</div>
               <div className="button"> <BiRightArrow /></div>
            </div>
        </div>
    )
}

export default HomePage
