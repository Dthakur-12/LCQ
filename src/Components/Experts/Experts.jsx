import React,{useEffect} from 'react'
import './Experts.css'
import expertone from '../../assets/expertone.png'
import expertwo from '../../assets/expertwo.png'
import expertfour from '../../assets/expertfour.png'
import Footer from '../Footer'

const Experts = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
        
      },[])
    return (
        <>
            <div className='container experts'>
                <div className='row'>
                    <h1>MEET OUR EXPERTS</h1>
                </div>
            </div>
            <div className='container-fluid expertstwo'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 expertleft'>
                            <img src={expertone} width='90%' alt='Ellie Lowther' />
                        </div>
                        <div className='col-md-7 expertright'>
                            <p> <span style={{ fontWeight: 'bolder' }}>Ellie Lowther, FRSA</span></p>
                            <p>Ellie Lowther, FRSA (Fellow of the Royal Society of Art) is proud to be our Trans & nonbinary inclusion specialist. Ellie has a vast amount of experience in this area and sees a radical way forward that can help change perspectives towards a more inclusive world.</p>
                            <p>She created the first "trans specific" safe house project in the UK and has been recognised nationally as a person who is making a difference with many large companies delivering highly regarded training, consultancy and pastoral support. Ellie is a visionary in the world of inclusion as she promotes her vision of the "radical middle road" where everyone is included.</p>
                            <p>#freetobeme</p>
                            <a href='https://www.linkedin.com/in/ellie-lowther/' target='_blank'> <p> <span style={{ textDecoration: 'underline' }}>Connect with Ellie on Linkedin</span></p></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid expertsthree'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 expertleft'>
                            <img src={expertwo} width='90%' alt='Ellie Lowther' />
                            <div>
                                <h5>From "Long Walk to Freedom" by Nelson Mandela</h5>
                                <p>One of the warders, a very pleasant young man named Warrant Officer Brand, actually took me to his family’s flat and introduced me to his wife and children. From then on, I sent his children Christmas cards every year.’</p>
                                <p style={{ marginTop: '20px' }}>‘Men like Warrant Office Brand reinforced my belief in the essential humanity even of those who had kept me behind bars for the previous twenty-seven and a half years’.</p>
                            </div>
                        </div>
                        <div className='col-md-7 expertright'>
                            <p> <span style={{ fontWeight: 'bolder' }}>Christo Brand</span></p>
                            <p>Christo’s early years were spent on a small farm outside Stanford in the Western Cape. The farm was called “Goedvertrouw” – a Dutch word meaning “Good trust”. He went to a small school on a nearby farm from the age of 5 years. Life was tough – the family had no luxuries; no electricity.</p>
                            <p>After high school, Christo joined the prison service. After a year’s training in Kroonstad he was sent to work on Robben Island in 1978 at the age of 19. That was when Christo first came across Nelson Mandela who at that time was 60 years old. This was where they formed a relationship which was to become so much more – a lasting friendship based on a mutual trust and respect for each other.</p>
                            <p>In 1982, Mandela was transferred to Pollsmoor Prison. On 13th March that year, Christo married Estelle. Soon afterwards, Christo was transferred to Pollsmoor and was responsible for guarding Mandela for the next 6 years.</p>
                            <p>On his release from prison, Mandela organised a job for Christo as an administrative and logistics manager in the Constitutional Assembly. Once the Constitution was adopted, Ahmed Kathrada arranged for Christo to start work again on Robben Island – this time as supervisor in the island shop. The wheel had turned full circle and Christo was back where he had started his work career.</p>
                            <p style={{ marginTop: '20px' }}>In July 2018 Christo resigned from Robben Island in order to pursue his dream of sharing his story on a full-time basis.</p>
                            <p> <span style={{ textDecoration: 'underline' }}>Connect with Christo Brand on Linkedin</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid expertsfour'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 expertleft'>
                            <img src={expertfour} width='90%' alt='Ellie Lowther' />
                            <div style={{ marginTop: '20px' }}>

                                <p>"Inclusive leadership is about embracing
                                    Mind (growth mindset), Heart (authenticity/ vulnerability/ empathy), and Gut (psychological safety)"</p>
                            </div>
                        </div>
                        <div className='col-md-7 expertright'>
                            <p> <span style={{ fontWeight: 'bolder' }}>John Metselaar</span></p>
                            <p>John Metselaar has turned his 30-year global Vice-President-level leadership responsibilities at Procter & Gamble into expertise in Leadership, Innovation, Strategy, and Organisational Culture. His extensive P&G experience has included on-the-ground working experience in Cincinnati-U.S.A., Kobe-Japan, and he left as CTO of P&G’s pivotal Brussels Innovation Centre. He now teaches, speaks, inspires, and advises broader audiences living his purpose of Passion for Innovation, Fascination with Leadership, and the Power of Connecting.</p>
                            <p>John has become Professor of Management Practice, teaching at Solvay Brussels School for Economics and Management. He also is Director at The Conference Board (NYC) owning its global Innovation & Digital Transformation Institute, and its European, Asian, and Gulf-Region Innovation Councils – in which he brings senior Innovation Executives together to grow their Innovation competence.</p>
                            <p>John further serves as Executive Advisor, “Philosopher”, and Key-note Speaker on Innovation, Leadership, Strategy, and Culture – working with companies as AB-InBev, Bayer, Ecolab, Deloitte, Pfizer, Mediamarkt, PMI, and more. He recently joined the Global Minds Network, and founded ‘Includers' boutique advisors on Inclusive Leadership, and “EI4I – Ecosystem Intelligence for Innovation” to guide leaders into their open innovation and ecosystem efforts.</p>
                            <p style={{ marginTop: '20px' }}>In July 2018 Christo resigned from Robben Island in order to pursue his dream of sharing his story on a full-time basis.</p>
                            <a href='https://www.linkedin.com/in/jmetconnect/' target='_blank'>  <p> <span style={{ textDecoration: 'underline' }}>Connect with John on Linkedin</span></p> </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Experts