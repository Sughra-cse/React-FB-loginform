import React, {Component} from "react";
import "./StyleSheet/Form.css";
class Form extends Component{
    constructor(props){
        super(props,);
         this.state = {FirstName: "soghra" ,Surname:"heena",
                       Phone:"998011234",emailAddress:"",
                       Newpassword:"12kdjf", FirstNameError:"",SurnameError:"",
                       PhoneError:"",emailAddressError:"",NewpasswordError:"",
                       };
                    }                   
// handlename=(event)=>{
//     this.setState({FirstName:event.target.value})
// }
handlechangeall =(event)=>{
    this.setState({[event.target.name]:event.target.value},
      ()=>{this.validateAll();});
};
validateAll=()=>{
    const{FirstName,Surname,Phone,emailAddress,Newpassword}=this.state;
    this.setState({FirstNameError:FirstName.length>3?null:'enter your firstname',SurnameError:Surname.length>3?null:'enter your surname',PhoneError:Phone.length>10?null:'enter your number'
    ,emailAddressError:emailAddress.length>3?null:'enter valid email',NewpasswordError:Newpassword.length>3?null:'enter password',})

}
handleSubmit = (event) =>{
    // alert('Enter the required fields');
    event.preventDefault();
    const {FirstName,Surname,Phone,emailAddress,Newpassword}=this.state;
   alert(`Your state values: \n
    FirstName:${FirstName}\n 
    Surname:${Surname}\n`);
};
Signup=(event)=>{
//    this.setState({this.state.render})

// this.setState({[event.name]:event.state});
};
    render(){
        return(
         <div className="parentcontainer">
             <div>
                 <p>Facebook helps you connect and share with <br></br>the people in your lifes</p>
             </div><div className="maincontainer">
            <h1>Create an account</h1> 
            <p>Its free and always will be.</p>
            <form onSubmit={this.handleSubmit}>
                {/* <label>FirstName</label> */}

            <input type="text" name="FirstName"  value={this.state.FirstName} onChange={this.handlechangeall} onBlur={this.validateAll.FirstNameError}/><br></br><br></br>
            <div className='invalid-feedback'>{this.state.FirstNameError}</div>
            <input type="text" name="Surname" value={this.state.Surname} onChange={this.handlechangeall} onBlur={this.validateAll.SurnameError}/><br></br><br></br>
            <div className='invalid-feedback'>{this.state.SurnameError}</div>
            <input type="number" name="Phone" value={this.state.Phone} onChange={this.handlechangeall} onBlur={this.validateAll.PhoneError} /><br></br><br></br>
            <div className='invalid-feedback'>{this.state.PhoneError}</div>
            <input type="password" name="Newpassword" value={this.state.Newpassword} onChange={this.handlechangeall} onBlur={this.validateAll.NewpasswordError}/><br></br><br></br>
            <div className='invalid-feedback'>{this.state.NewpasswordError}</div>
            <label>Birthday</label><br></br><br></br>
            <input type="date" name="Date" value={this.state.Date} onChange={this.handlechangeall} onBlur={this.validateAll.FirstNameError}/>&#63;<br></br><br></br>
            <label for="gender">Gender</label><br></br><br></br>
            <input type="radio" name="gender"/>Female
            <input type="radio" name="gender"/>Male
            <input type="radio" name="gender"/>Custom&#x3f;<br></br><br></br>
             <button id="btn" onClick={this.Signup} type="submit">Signup</button>
             </form></div>
          </div>      
        );
    }
}
export default Form;