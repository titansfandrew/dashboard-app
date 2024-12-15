import { Link } from "react-router-dom";

function Home() {
    return (
      <>
         <h2>Dashboard App</h2>
         <p>
            <Link to="/login">Login</Link>
         </p>
      </>
    );
  }
  
  export default Home;
  
  