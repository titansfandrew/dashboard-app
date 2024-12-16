import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

function Login() {

   const [msg,setMsg] = useState("");
   const txtusername = useRef("");
   const txtpassword = useRef("");

   const navigate = useNavigate();

   const handleLogin = (e) => {

      let _msg = "";

      const _username = txtusername.current.value;
      const _password = txtpassword.current.value; //optionally: encrypt password

      //## for local testing use localhst url
      const _localhost_url = `http://localhost:8080/login/${_username}/${_password}`;

      //## when publishing code to github pages use replit url 
      const _replit_url = `https://243bc221-a55b-49c4-90e4-cc1f1b814855-00-2o8p7mtr1we53.janeway.replit.dev/login/${_username}/${_password}`;

      try {
      
         _msg = "# handleLogin"
         setMsg(_msg);

         if(txtusername.current.value == null | txtusername.current.value.length == 0)
         {
            _msg = "# please enter a valid username"
            setMsg(_msg)
            return false; 
         }

         if(txtpassword.current.value == null | txtpassword.current.value.length == 0)
         {
            _msg = "# please enter a valid password"
            setMsg(_msg)
            return false; 
         }

         //send request to backend api 

         //## for local testing use localhst url
         //## when publishing code to github pages use replit url 
         //fetch(_localhost_url)
         fetch(_replit_url)
         .then((res)=>res.json())
         .then((data)=> {

             setMsg(data.msg)

             //if successful login
             //-- redirect to dashboard          

            if(data.login === true)
            {
                  //naviagete to dashboard 
                  navigate("/dashboard",{replace:true});
            }    

            setMsg(data.msg)

         })
         .catch((error)=>{
             setMsg("* request error");
             console.log("* request error *");
             console.log(error);
         });


      } catch (error) {
         
         _msg = "# handleLogin::Error"
         setMsg(_msg);         

         console.log(_msg)         
         console.log(error)
      }
   }

    return (
      <>
         <h2>Login</h2>
         <div>
            <span>* username: </span><input ref={txtusername} type="text" maxLength={20} placeholder="* username required"/> <br/>
            <span>* password: </span><input ref={txtpassword} type="password" maxLength={10} placeholder="* password required"/> <br/>
            <p>{msg}</p>
            <p></p>
            <button onClick={handleLogin}>login</button>
        </div>
         <p>
            <Link to="/">Home</Link>
         </p>  
         <p>
            <Link to="/register">register</Link>
         </p>         
      </>
    );
  }
  
  export default Login;
  
  