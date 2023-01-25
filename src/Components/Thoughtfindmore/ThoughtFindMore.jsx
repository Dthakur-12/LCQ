import React,{useState,useEffect} from 'react'
import './ThoughtfindMore.css'
import Footer from '../Footer'

const ThoughtFindMore = () => {
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
        <div className='container thoughtcontainer'>
            <div className='row thoughtleadership'>
                <div>
                    <h1>THOUGHT LEADERSHIP:</h1>
                    <h1>MASTERCLASSES AND CONFERENCES </h1>
                </div>
                <div style={{ marginTop: '25px' }}>
                    <b>​Objectives</b>
                    <p>Three 90 minutes interactive conferences lead by Vanessa Barros in collaboration with expert guest speakers.<br />The objectives of these conferences are to raise participants awareness on the benefits of Diversity and Inclusion and helping them challenge and stretch their concrete impact on this on their environment with mindset shift, concrete strategies and practical applications.</p>
                </div>
                <div style={{ marginTop: '25px' }}>
                    <b>Target Audience</b>
                    <p>Managers who want to have a positive and sustainable impact on the newly formed corporation through a better understanding of Diversity and Inclusion.</p>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <b>Content</b>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <b>Conference #1 : Diversity and Inclusion</b>
                    <div>
                        <ul>
                            <li>5 min – The team leader introduces author Dr Vanessa Barros , Amelie Devaux and the masterclass.</li>
                            <li>50 min – Presentation by the facilitators introducing the richness of diversity and the need for inclusion to take advantage of its full potential. Presentation of how our “narrative” brain is wired to fear anything that is different and how we need to practice our “experience” brain to avoid stereotypes, judgment and biases. If we don’t deliberately include, we accidentally exclude. Introduction to simple inclusive tools to manage diversity harmoniously. We would like to use menti.com as interaction tool.</li>
                            <li>30 min – Q&A - Interaction with the participants on their experiences and insights.</li>
                            <li>5 min – Team leader’s closing remarks.</li>
                        </ul>
                    </div>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <b>Conference #2 : ACE - a Grammar for Inclusion</b>
                    <div>
                        <ul>
                            <li>5 min – The team leader introduces author Dr Vanessa Barros and the masterclass.</li>
                            <li>50 min – Presentation by Dr Vanessa Barros, reminding how inclusion is a source of profit, introducing professionalism as a ‘non’ standard, and summarising the ACE framework for intercultural conflict resolution (ACE being the grammar for effective inclusion). We would like to use menti.com as interaction tool.</li>
                            <li>30 min – Q&A - Interaction with the participants on their experiences and insights.</li>
                            <li>5 min – Team leader’s closing remarks.</li>
                        </ul>
                    </div>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <b>Conference #3: Inclusion for Innovation (with Includers think tank)</b>
                    <div>
                        <ul>
                            <li>5 min – The team leader introduces author Dr Vanessa Barros, Includers and the masterclass.</li>
                            <li>50 min – Presentation by Dr Vanessa Barros with Includers' senior innovation experts, providing practical strategies to unleash innovation and turn ideation into VALUE creation. Beyond technology, innovation is about people and their social interactions. We provide guidance to ensure that inclusion is part of all the stages of the innovation process (knowledge, ideation and conversion) to unleash its full value potential.</li>
                            <li>30 min – Interaction with the participants on their experiences and insights.</li>
                            <li>5 min – Team leader’s closing remarks.</li>
                        </ul>
                    </div>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <b>Financial Proposal</b>
                    <p>To receive our full proposal, please take a moment to fill out the form below. You'll receive it via email straight away</p>
                </div>
                <div>
                    <form className='formdatathree'>
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
        </div>
        <Footer/>
        </>
    )
}

export default ThoughtFindMore