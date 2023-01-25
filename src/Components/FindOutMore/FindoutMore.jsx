import React, { useState,useEffect } from 'react'
import './FindMore.css'
import Footer from '../Footer'

const FindoutMore = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
        
      },[])
    const [UserData, setUserData] = useState({
        email: '',
        Fname: '',
        Lname: '',
        Cname: '',
    })

    const handleChange = (event) => {
        setUserData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(UserData.email);
        console.log(UserData.Fname);
        console.log(UserData.Lname);
        console.log(UserData.Cname);
    }
    return (
        <>
        <div className='container findMore'>
            <h1>EXECUTIVE TRAINING</h1>
            <b>Objectives </b>
            <p>The objective of our training is a behavioural change towards deliberate inclusive leadership. The content is based on our scientific research and more than 250 executive interviews. We use the experiential learning methodology and provide a 12 week follow-up program to ensure sustainable change.</p>
            <b>​Target Audience </b>
            <p>Managers who want to gain new skills on Diversity and Inclusion.</p>
            <p>Top Management Teams.</p>
            <b>Seminars </b>
            <div style={{ marginTop: '20px' }}>
                <b>#1 Including Deliberately </b>
                <p>A 4h introductory workshop to D&I with focus on the biases created by our narrative brain and strategies to practice our experience brain and counter such biases. Introduction to HOPES framework.</p>
            </div>
            <div style={{ marginTop: '20px' }}>
                <b>#2 Inclusive Leadership</b>
                <p>2 x 3h workshop on: <br />- how to develop an inclusive leadership posture through Curiosity, Candour, Courage and Courtesy (4Cs).<br />- how to manage a diverse team dynamic in an inclusive manner</p>
            </div>
            <div style={{ marginTop: '20px' }}>
                <b>#3 ACE : a Grammar for Inclusion </b>
                <p>4 x 4h workshop on:</p>
                <p>- to Attend to emotions and tools to reduce tension <br />- to Attend to emotions and tools to reduce tension<br />- to Contextualise tension by understanding its dynamics<br />- understanding how our brain works - narrative versus experience brain<br />- understanding and detecting cultural differences<br />- practicing inclusive communication<br />- to Explore tension resolution tools and practice influential tactics</p>
            </div>
            <div style={{ marginTop: '20px' }}>
                <b>#4 Performance Boosters</b>
                <p>2h workshops providing practical tools to boost diverse teams' performance:</p>
                <p>- Inclusive Recruitment<br />- Inclusive Meetings<br />- Inclusive Feedback<br />- Inclusive Project Management</p>
            </div>
            <div style={{ marginTop: '20px' }}>
                <b>#5 Inclusion and Innovation</b>
                <p>2 x 4h day workshop covering the innovation process and how to ensure inclusion at each stage of the <br />process through psychological safety to reach optimal value creation.</p>
            </div>
            <div style={{ marginTop: '20px' }}>
                <b>Financial Proposal </b>
                <p>​To receive our full proposal, please take a moment to fill out the form below. You'll receive it via email straight away</p>
            </div>
            <div>
                <form className='formdatatwo'>
                    <input type='text' name='email' placeholder='Email' onChange={handleChange} />
                    <input type='text' name='Fname' placeholder='First Name' onChange={handleChange} />
                    <input type='text' name='Lname' placeholder='Last Name' onChange={handleChange} />
                    <input type='text' name='Cname' placeholder='Company Name' onChange={handleChange} />
                    <div>
                        <button onClick={handleSubmit}>SUBMIT</button>
                    </div>
                </form>

            </div>
        </div>
        <Footer/>
        </>
    )
}

export default FindoutMore