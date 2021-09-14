import React, {useState} from 'react'
import "./Work.css"
import moment from "moment";
import {ImQuotesLeft, ImQuotesRight,} from "react-icons/im";
import {ImCancelCircle} from "react-icons/im";

import img from "../Img/img1.png";
import img2 from "../Img/img2.jpg";
import img3 from "../Img/img3.jpg";
import img4 from "../Img/img4.jpg";
import img5 from "../Img/img5.jpg";
import img6 from "../Img/img6.jpg";
import img7 from "../Img/img7.jpg";
import img8 from "../Img/img8.jpg";
import img9 from "../Img/img9.jpg";
import img10 from "../Img/img10.jpg";
import img11 from "../Img/img11.jpg";
import img12 from "../Img/img12.JPG";

const HomeScreen = () => {
  const [data,setData] = useState([{

    id: 1,
    name: "Hibeekay",
    quote: "Great is thy faithfulness,oh Lord my Father, morning by morning new mercies i see.All that i wanted thy great hand provided.",
    image: img,
    time: Date.now(),
    

  },
{
  id: 2,
  name: "Bright",
  quote: "Brightest of all, shining among the stars",
  image: img2,
  time: Date.now(),
},
{
  id: 3,
  name:"Veron",
  quote: "Most quiet, very observant and understandable lady",
  image: img3,
  time: Date.now(),
},
{
  id: 4,
  name: "Sam",
  quote: "Failure is not final by the light skinned nigga with the beards",
  image: img4,
  time: Date.now(),
},
{
  id: 5,
  name: "Taibat",
    quote: "The lady with the iota of computer engineering that's always giving us vibe with her voice and smile",
  image: img5,
  time: Date.now(),
},
{
  id: 6,
  name: "Elijah",
  quote: "He is the code guru, always infusing an understandable hint in Mr Peter's teaching",
  image: img6,
  time: Date.now(),
},
{
  id: 7,
  name: "Ope",
  quote: "The guy who knows the job however he wont talk so that we wont rush him",
  image: img7,
  time: Date.now(),
},
{
  id: 8,
  name: "Abayomi",
  quote: "The man with the voice and the smile always.",
  image: img8,
  time: Date.now(),
},
{
  id: 9,
  name: "Mayowa",
  quote: "My pair mate with the baddest code swag and her smiles says it all.",
  image: img9,
  time: Date.now(),
},
{
  id: 10,
  name: "Dearest",
  quote: "Worth is worth doing is worth doing well",
  image: img10,
  time: Date.now(),
},
{
  id: 11,
  name: "Damilola",
  quote: "The Lord is good, all the time",
  image: img11,
  time: Date.now(),
},
{
  id: 12,
  name: "Diamond",
  quote: "Find light in the beautiful seas, i chose to be happy.You and I are like diamonds in the skies",
  image: img12,
  time: Date.now(),
}])

  return (
    <div className= "container">
     <div className= "container_wrapper">
       {data.map((user)=>(
         <div className= "container_card">
         <div className= "containercardrow">
         <div className= "containercardrowcancel">
           <ImCancelCircle/>
         </div>
         <img className= "containercardrowimage"alt="img"
                  src={user.image}
                />
         </div>
         
         <div className= "containercardrowquote">
           <div> <ImQuotesLeft />
                </div>
                {user.quote}</div>
                <div>
                  <ImQuotesRight />
                </div>
         <div className= "containercardName">{user.name}</div>
         <div className= "containercardTime">{" "}
                {moment(user.time).fromNow()}
              </div>
       </div>
       ))}
     </div>
    </div>
  )
}

export default HomeScreen

