import React, { useState } from 'react'


export default function Contact() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [userMessage, setUserMessage]= useState("")
    //The submit button is disable by default
    const [inputError, setInputError] = useState(true);
    const [fullNameError, setFullNameError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [messageError, setMessageError] = useState(true);
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [fullNameErrorMsg, setFullNameErrorMsg] = useState("");
    const [messageErrorMsg, setMessageErrorMsg] = useState("");


    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const inputName = event.target.name;
        //Checking which variable changed and validating the data from the user
        switch (inputName) {
            case "fullName":
                if (inputValue.length < 7) {
                setFullNameErrorMsg ("Please enter your full name")
                } else {
                setFullNameError(false);
                setFullName=inputValue;  
                }    
            break;
            case "email":
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)) {
                setEmail=inputValue;
                setEmailError(false);
                } else {
                setEmailErrorMsg("Please enter a valid email address")
                }
            break;
            case "message":
                if (inputValue.length < 15) {
                    setMessageErrorMsg ("Please enter your a message")
                    } else {
                    setMessageError(false);
                    setMessage=inputValue;  
                    }
            break;
        }
        if(!emailError && !messageError && !fullNameError) inputError(false);
    }
   
    const handleFormSubmit = (event) => {
     event.preventDefault();
     if (setFullName && setEmail && setMessage) {
         //Show a message to the sender
        setUserMessage(`Thank you for you message ${fullName}, you will receive a reply as soon as possible`)
        //Clear all the state variables
        setFullName("");
        setEmail("");
        setMessage("")
        //Disable the submit button
        setInputError(true); 
     }
    }

    return (
        <section>
        <div>{userMessage}</div>
        <form>
        <div className="mb-3">
          <label for="fullName" className="form-label">Your name!</label>
          {/* The value property comes/goes to the state variable */}
          <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Full Name" onChange={handleInputChange()} value={fullName}></input>
          <p>{fullNameErrorMsg}</p>
        </div>
          <div className="mb-3">
            <label for="email" className="form-label">Your email!</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" onChange={handleInputChange()} value={email}></input>
            <p>{emailErrorMsg}</p>
          </div>
          <div className="mb-3">
            <label for="message" className="form-label">Your message!</label>
            <textarea className="form-control" id="message" name="message" rows="3" onChange={handleInputChange()} value={message}></textarea>
            <p>{messageErrorMsg}</p>
          </div>
          <div className="mb-3">
            <button disabled={inputError} className="btn btn-lg btn-primary" type="button" onClick={handleFormSubmit()}>Send it!</button>
          </div>
        </form>
      </section>
    )  
}