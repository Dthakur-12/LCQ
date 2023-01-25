import React, { useState,useEffect } from 'react'
import './Contact.css'
import Footer from '../Footer'

const ContactUs = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
        
      },[])
    const [UserData, setUserData] = useState({

        Fname: '',
        Lname: '',
        Cname: '',
        email: '',
        Pnumber: '',
        Yquestion: '',
        isCheckedOne: false,
        isCheckedTwo: false,
    })

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setUserData(prevData => {
            return {
                ...prevData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(UserData.Fname);
        console.log(UserData.Lname);
        console.log(UserData.Cname);
        console.log(UserData.email);
        console.log(UserData.Pnumber);
        console.log(UserData.Yquestion);
        console.log(UserData.isCheckedOne);
        console.log(UserData.isCheckedTwo);

    }
    return (
        <>
        <div className='container conatactcontainer'>
            <div className='row contact'>
                <div className='col-md-6'>
                    <h1>CONTACT</h1>
                </div>
                <div className='col-md-6 contactright'>
                    <p>We'd love to hear from you - you can email us at </p>
                    <a href ='mailto:contact@leadershipcq.com'><p>contact@leadershipcq.com</p></a>
                    <p>Follow us on Facebook : @leadershipcq</p>
                    <p>Follow us on Instagram : @leadershipcq</p>
                    <div style={{ marginTop: '30px' }}>  <p> Or fill in the form below</p></div>
                </div>
            </div>
            <div className='row contacttext'>
                <h4>Please fill in the form and we will get back with you</h4>
                <div>
                    <form className='formdatacontact'>
                        <input type='text' name='Fname' placeholder='First Name' onChange={handleChange} value={UserData.Fname} />
                        <input type='text' name='Lname' placeholder='Last Name' onChange={handleChange} value={UserData.Lname} />
                        <input type='text' name='Cname' placeholder='Company Name' onChange={handleChange} value={UserData.Cname} />
                        <input type='text' name='email' placeholder='Email' onChange={handleChange} value={UserData.email} />
                        <input type='number' name='Pnumber' placeholder='Phone Number' onChange={handleChange} value={UserData.Pnumber} />
                        <textarea name='Yquestion' placeholder='Your Question' onChange={handleChange} value={UserData.Yquestion} />
                        <div className='formtext'>
                            <h6>Leadership CQ is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:</h6>
                        </div>
                        <div className='firstcheckbox'>
                            <input type='checkbox' checked={UserData.isCheckedOne} onChange={handleChange} name='isCheckedOne' />
                            <p>I agree to receive other communications from Leadership CQ.*</p>
                        </div>
                        <div className='formtext'>
                            <h6>In order to provide you the content requested, we need to store and process your personal data. If you consent to us storing your personal data for this purpose, please tick the checkbox below.</h6>
                        </div>
                        <div className='firstcheckbox'>
                            <input type='checkbox' checked={UserData.isCheckedTwo} onChange={handleChange} name='isCheckedTwo' />
                            <p>I agree to allow Leadership CQ to store and process my personal data.*</p>
                        </div>
                        <div className='formtext'>
                            <h6>You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.</h6>
                        </div>
                        <div>
                            <button onClick={handleSubmit}>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ContactUs