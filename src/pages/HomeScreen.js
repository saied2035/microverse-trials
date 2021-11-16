import React,{useState} from 'react'
import './home.css'
export default function HomeScreen() {
      const [error,setError] = useState() 
    const sendEmail = (event) => {
        event.preventDefault()
        const email = document.querySelector('#email').value
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            // fetch not working server prevent access
                fetch("https://www.freecodecamp.com/email-submit", {
                method: 'post',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({
                    email: email
                })          
                }).then((data) => console.log(data))
                .catch(err => setError("server not responding!"))
        }
        else {    
          setError("Please, add a valid email.")
       }

  }   
    return (
        <div className="flex justify-center form "  style={{height:'80vh'}}>
           <form onSubmit={ sendEmail }>
             <p className="tc f4 fw6" style={{marginBlockEnd:'0.5rem'}} >register form</p>
             <input id="email" type="email" placeholder="enter your email"  />
             <input className="ml2" type="submit" value="submit"/>
             <p className="tc red">{error}</p>
           </form>
        </div>
    )
}
