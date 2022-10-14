import { useEffect } from "react"
import Whrite from "./whrite";
import Navbar from './navbar';

 


export default function Profile(){


  var name = sessionStorage.getItem('name');
  var occupation = sessionStorage.getItem('occupation');
  var email = sessionStorage.getItem('email');

  return(
   <div>
    <Navbar />
  <div className="background">
    <div className="container">
       <img className="imageProfile" src="imageProfile.png" alt="Mary" ></img>
       <h1 className="name">{name}</h1>
       <p  className="information">{occupation}</p>
       <p className="information">{email}</p>
    </div>
  
  <Whrite />
  </div>
  </div>
)


}