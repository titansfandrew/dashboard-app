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
      const items = ["https://github.com/titansfandrew/dashboard-app/tree/main/dashboard-project","https://theuselessweb.com/", "https://www.randomfactgenerator.com/", "https://github.com/titansfandrew/project-backend-api", "item 5", "item 6", "item 7", "item 8"]
      setMsg(items[index])
   }

    return (
      <>
            <div style={headerStyle}>
               <div style={{"display":"flex"}}>
                  <h1 style={{"width":"60%", "text-align":"right"}}>Dashboard</h1>
                     <span style={{"width":"40%","text-align":"right"}}>
                        <span>Goodbye! </span>
                        <Link to="/login">logout</Link>
                     </span>
               </div>
            </div>

         <div style={{overflow:"auto"}}>
            <div className="menu">
            <a href="/" onClick={(e)=>handleLinkClick(e,0)}>Github to this Project</a>
            <a href="/" onClick={(e)=>handleLinkClick(e,1)}>Random Website Generator</a>
            <a href="/" onClick={(e)=>handleLinkClick(e,2)}>Radnom Fact Generator</a>
            <a href="/" onClick={(e)=>handleLinkClick(e,3)}>Github Backend API</a>
         </div>

         <div className="main">
            <h2>Hello There!</h2>
            <p>In this dashboard there will be a couple links, some to the github for this project and some fun ones. (Will have to copy links)</p>
            {msg}
         </div>

         <div className="right">
            <h2>About</h2>
            <p>This is a dashboard.</p>
            <p>Here you can navigate through some different links.</p>
            </div>
         </div>
         <p></p>
         <div style={{"background-color":"#e5e5e5","text-align":"center","padding":"10px","margin-top":"7px;"}}>
               Welcome!
         </div>

      </>

    );
  }
  
  export default Dashboard;
  
  