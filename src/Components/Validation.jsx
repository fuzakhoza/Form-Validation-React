


import { useRef, useState } from 'react';
import './Validation.css'

const Validation = () => {
    const [name, setName] =useState("");
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState("");
    const [massage, setMassage] = useState();
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    
    
    const namePatten = /^[A-Za-z]*\s{1}[A-Za-z]*$/
    const phone_patten = /^[0-9]{10}$/
    const email_patten = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/

    const nameValidation = ()=>{
        setName(() =>{
            nameRef.current.value
            if(nameRef.current.value == ""){
                document.querySelector('.name_error').innerHTML = "Fullname is required";
            }
            if(!namePatten.test(nameRef.current.value)){
                document.querySelector('.name_error').innerHTML = "Enter your fullname" 
            }else{
                 document.querySelector('.name_error').innerHTML = 'Name valid'
            }
            
            
        })
    }
    const phoneValidation = ()=>{
        setPhone(() =>{
       if(phoneRef.length == ""){
        document.querySelector('.phone_error').innerHTML = "Please enter your phone";
       }
       if(!phone_patten.test(phoneRef.current.value)){
        document.querySelector('.phone_error').innerHTML = "Enter correct phone";
       }else{
        document.querySelector('.phone_error').innerHTML = "Phone is valid";
       }
       console.log(phoneRef.current.value);
        })
    }
    const emailValidation = (e)=>{
        setEmail(()=>{
            if(e.target.value == ""){
                document.querySelector('.email_error').innerHTML = "Please enter email";   
            }
            !email_patten.test(e.target.value)?document.querySelector('.email_error').innerHTML = "Please enter correct email"
            :document.querySelector('.email_error').innerHTML = "Email is valid";
            
            
            
        })
    }

    const massageValidation = (e)=>{
        setMassage(()=>{
            const requered = 30
            const left = requered - e.target.value.length
        

            if(left > 0){
                
                document.querySelector('.massage_error').innerHTML = left + "more charact requered"  
            }else
            {
                document.querySelector('.massage_error').innerHTML = "massage is valid"
            }
        })
    }
    const sabmitValidation = ()=>{
        if(!nameValidation() || !phoneValidation || !emailValidation() || !massageValidation()){
             document.querySelector('.btn_error').style.display = "block"
              document.querySelector('.btn_error').innerHTML = "Please fix the error"
              setInterval(()=>{
                document.querySelector('.btn_error').style.display = "none"
              },10000)
            }
    }
   

    
    return(
    <div className='container'>
        <form>
            <div className="input-group">
                <label htmlFor="name">Full Names</label>
                <input type="text" placeholder='Full name' ref={nameRef} onChange={() =>{ nameValidation()}}/>
            </div>
            <p className='name_error'></p>

            <div className="input-group">
                <label htmlFor="phone">Tellephone</label>
                <input type="tel" placeholder='0114552222'ref={phoneRef} onChange={() =>{phoneValidation()}}/>
                
            </div>
            <p className='phone_error'></p>

            <div className="input-group">
                <label htmlFor="email">Email address</label>
                <input type="email" placeholder='example@gmail.com'onChange={(e)=>{emailValidation(e)}} />
                
            </div>
            <p className="email_error" ></p>

            <div className="input-group">
                <label htmlFor="massage">Massage</label>
                <textarea name="massage" rows="5" onChange={(e)=>{massageValidation(e)}}></textarea>
                
            </div>
            <p className='massage_error'></p>

            <div className="btn">
                <button onClick={()=>{return sabmitValidation()}}>Submit</button>
            </div>
            <span className='btn_error'></span>
        </form>
    </div>
  )
}

export default Validation