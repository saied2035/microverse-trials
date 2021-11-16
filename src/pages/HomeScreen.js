import React,{useState} from 'react'
import './home.css'
export default function HomeScreen({addUser}) {
      const [error,setError] = useState('') 
      const [msg,setMsg] = useState('')
    const sendEmail = (event) => {
        event.preventDefault()
        const email = document.querySelector('#email').value
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
              document.getElementById('emailform').reset()
                addUser(email)
                setMsg('you get added to the products') 
                setError('')       
        }
        else {    
         setError("Please, add a valid email.")
         setMsg('')
       }

  }   
    return (
        <div className="flex justify-center form "  style={{height:'80vh'}}>
           <form id="emailform" onSubmit={ sendEmail }>
             <p className="tc f4 fw6" style={{marginBlockEnd:'0.5rem'}} >register form</p>
             <input id="email" type="email" placeholder="enter your email"  />
             <input className="ml2" type="submit" value="submit"/>
             <p className="tc red">{error}</p>
             <p className="tc ">{msg}</p>
           </form>
        </div>
    )
}
