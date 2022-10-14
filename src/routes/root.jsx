import '../styles/root.css'
import { Outlet, Link } from "react-router-dom";
import Navbar from './navbar';


export default function Root(){
    return(
        <div>
       <Navbar />
       <div className="main">
        <h1 className="title">Designed to write what you want</h1>
        <img src="/lamp.png" className='image'></img>
       </div>
       <div  className='about' id='about'>
        <h2 className='titAboutle'>About:</h2>
        <h3 className='textAbout'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
       </div>
        </div>
    )
}