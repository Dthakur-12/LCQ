import React from 'react'
import '../App.css'
import Bookblog from '../../src/assets/virtual.jpeg'
import ReButton from './ReButton'

const Bookblogtwo = () => {
    return (
        <div className='container-fluid blogcontainertwo'>
            <div className='container blogsmallcontainer'>
                <div className='row'>
                    <div className='col-md-6 blogimagetwo'>
                        <div className='virttxt'>
                            <h1>Virtuel, Vertueux, Virtuose</h1>
                            <p>At the heart of post-Covid organizations' challenges. This collective book brings a powerful reflexion combined with practical tips on the profound changes that virtuality has brought to the work place and ways to embrace that change successfully: working practices, team management, innovation, leadership, e.learning, cultural differences. English Translation underway.</p>
                        </div>
                        <div className='btnjs'>
                        <ReButton text='BUY THE BOOK' onClick={()=>{
                            window.open('https://livre.fnac.com/a16033422/Vanessa-Barros-Virtuel-vertueux-virtuose','_blank')
                        }}/>
                        </div>
                    </div>
                    <div className='col-md-6  blogpic'>
                    <img src={Bookblog} alt='BlogImage' />
                </div>

                </div>
            </div>

        </div>
    )
}

export default Bookblogtwo