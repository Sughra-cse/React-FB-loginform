import React from "react";
import  "./StyleSheet/StyleHeader.css";
// constructor(props){
//   Header(props);
//   this.state=()
// }
class Header extends React.Component{
    render(){
        return(
         <div className="wrapper">
        <div><h1>facebook</h1></div>  <form><div className="label">
        
        <div>  <label>Email or phone</label><br></br>
             <input type="email||number"/></div>
        <div>
           <label>password</label><br></br>
             <input type="password"/><br></br><br></br>
             <p id="p">Forgotten account?</p><br></br>
        </div>    
        <div> <button>Log In</button></div> </div></form>
          </div>      
        );
    }
}
export default Header;