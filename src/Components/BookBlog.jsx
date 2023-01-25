import React from 'react'
import '../App.css'
import Bookblog from '../../src/assets/bookblog.png'
import ReButton from './ReButton'
import { useNavigate } from 'react-router-dom'
import { Link, } from 'react-router-dom'

const BookBlog = () => {
    const navigate=useNavigate();
    return (
        <div className='container-fluid blogcontainer'>
            <div className='container blogsmallcontainer'>
                <div className='row'>
                    <div className='col-md-6 blogpic'>
                        <img src={Bookblog} alt='BlogImage' />
                    </div>
                    <div className='col-md-6 blogimagetwo'>
                        <p>Don't Mess with My Professionalism!</p>
                        <span>How to Resolve Conflict Across Cultures</span>
                        <article>Questioning others’ professionalism invites an immediate negative reaction that many international executives have when they are facing a behavior which is culturally different from theirs and which they don’t understand in the workplace.
                            ‘Professionalism’ becomes the alibi for imposing one’s cultural views of the world and of the workplace. ‘Professionalism’ becomes the alibi for ethnocentrism which in turn jeopardizes relationships at work and reduces chances of success in the evergrowing multicultural business world. Such phenomenon may help explain why 70% of Merger and Acquisitions that fail, are due to cultural differences, whether these may be corporate or national.</article>
                       <ReButton text='BUY THE BOOK' onClick={()=>{
                        window.open('https://www.amazon.com/Dont-mess-Professionalism-Conflict-Cultures-ebook/dp/B087JMS4P9','_blank')
                       }}/>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default BookBlog