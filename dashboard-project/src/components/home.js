import { Link } from "react-router-dom";
import "./../home.css";

function Home() {
    return (
      <>
         <div style={{"text-align":"center"}}>
            <h2>Welcome to my dashboard app.</h2>
            <p>
               <Link to="/login">Go to login page</Link>
            </p>
         </div>
      </>
    );
  }
  
  export default Home;
  
  