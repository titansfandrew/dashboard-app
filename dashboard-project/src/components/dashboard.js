import { useState } from "react";
import { Link } from "react-router-dom";
import "./../dashboard.css";

function Dashboard() {

   const headerStyle = {
 
      backgroundColor:"#e5e5e5",
      padding:"15px",
      textAlign:"center",
      alignItems: "center",
      justifyContent: "center"
    }
    

   const [msg,setMsg] = useState("");

   const handleLinkClick = (e,index) =>{
      e.preventDefault()
      const items = ["item one","item two", "item three", "item 4", "item 5", "item 6", "item 7", "item 8"]
      setMsg(items[index])
   }

    return (
      <>
            <div style={headerStyle}>
               <div style={{"display":"flex"}}>
                  <h1 style={{"width":"60%", "text-align":"right"}}>Dashboard</h1>
                     <span style={{"width":"40%","text-align":"right"}}>
                        <span>Welcome </span>
                        <Link to="/login">logout</Link>
                     </span>
               </div>
            </div>

         <div style={{overflow:"auto"}}>
            <div className="menu">
            <a href="/" onClick={(e)=>handleLinkClick(e,0)}>Link 1</a>
            <a href="/" onClick={(e)=>handleLinkClick(e,1)}>Link 2</a>
            <a href="/" onClick={(e)=>handleLinkClick(e,2)}>Link 3</a>
            <a href="/" onClick={(e)=>handleLinkClick(e,3)}>Link 4</a>
            <a href="/" onClick={(e)=>handleLinkClick(e,4)}>Link 5</a>
         </div>

         <div className="main">
            <h2>Lorum Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            {msg}
         </div>

         <div className="right">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
         </div>
         <p></p>
         <div style={{"background-color":"#e5e5e5","text-align":"center","padding":"10px","margin-top":"7px;"}}>
               footer
         </div>

      </>

    );
  }
  
  export default Dashboard;
  
  