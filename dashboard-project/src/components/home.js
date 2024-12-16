import { Link } from "react-router-dom";
import "./../home.css";

function Home() {

   const headerStyle = {
 
      backgroundColor:"#e5e5e5",
      padding:"15px",
      textAlign:"center",
      alignItems: "center",
      justifyContent: "center"
    }

    return (
      <>
         <div style={{"text-align":"center"}}>
            <div style={headerStyle}>
               <h2>Welcome to my dashboard app.</h2>
            </div>
            <p>
               <Link to="/login">Go to login page</Link>
            </p>
         </div>
      </>
    );
  }
  
  export default Home;
  
  