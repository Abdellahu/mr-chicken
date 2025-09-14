import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'
import{ Link } from 'react-router'
import { ArrowRight, CaretDown, CaretUp, Chat, Clock, Dot, File, Headphones, Map, People, Phone, QuestionCircle, Send } from 'react-bootstrap-icons'
import { useTheme } from "./../Header/Brightness";
import MapComponent from '../Home/MapComponent'

 function Contact( ) {
    const { theme } = useTheme()
    const contactRef = useRef(null)
    const [visualize1, setVisualize1] = useState(false)
    const [visualize2, setVisualize2] = useState(false)
    const [visualize3, setVisualize3] = useState(false)
    const [visualize4, setVisualize4] = useState(false)
  //customize it
    const toVisual1 = () => {
        setVisualize1(!visualize1)
        setVisualize2(false)
        setVisualize3(false)
        setVisualize4(false)
    }
    const toVisual2 = () => {
        setVisualize2(!visualize2)
        setVisualize1(false)
        setVisualize3(false)
        setVisualize4(false)        
    }
    const toVisual3 = () => {
        setVisualize3(!visualize3)
        setVisualize2(false)
        setVisualize1(false)
        setVisualize4(false)        
    }
    const toVisual4 = () => {
        setVisualize4(!visualize4)
        setVisualize2(false)
        setVisualize3(false)
        setVisualize1(false)        
    }
 useEffect(() => {
  if(contactRef.current) {
    contactRef.current.scrollIntoView({
      behavior: 'smooth', 
      block: 'start'
    })
  }
 }, []) 

 
  return (
        <div ref={contactRef}  className={theme==='dark'? 'contact-page toDimContact': 'contact-page'} > 
        <div   className='container'>
            <div className="lets">
                <div className='sign-texts'>
                    <div className='pre-text for-contact text-favo'>
                        <Chat/>
                        <p>We're Here to Help</p>
                    </div>
                    <div className='taste taste-for-contact'>
                        <p className='you'>Let's Start a</p>
                        <p className='tasteT cata-sign'>Conversation</p>
                    </div>
                    <div className='difference'>
                        <p className='grey grey-font'>Whether you have questions about our menu, want to make a reservation, or simply want to share your experience, we'd love to hear from you.</p>
                    </div>
                </div>
                <div className='pre-flex-div '>
                    <a href='#feedForm' className='pre-exp  '> <Send/> Send us a message <ArrowRight className='toHover' /></a>
                    <Link to='tel:+251941250000' className='pre-find '><Phone /> Call Now</Link>
                </div>
            </div>
            <div  className= 'send' id='feedForm'>
                <div className='sign-texts'>
                    <div className='pre-text for-contact text-favo'>
                        <Send/>
                        <p>Send Message</p>
                    </div>
                    <div className='taste '>
                        <p className='you'>Share Your Thoughts</p>
                        <p className='tasteT cata-sign'>We're Listening</p>
                    </div>
                    <div className='difference'>
                        <p className='grey grey-font'>Your feedback helps us serve you better. We'll respond within 2 hours during business hours.</p>
                    </div>
                </div>
            </div>
            <div    className='nameSend'   >
                <div className='formDiv'>
                    <form className='row'>
                      <div className='col-md-6'>
                        <label ><People  className='ico-con' /> First Name</label><br />
                        <input type='text' name='firstname' placeholder='Enter your first name'/> <br />
                      </div>
                      <div className='col-md-6'>
                      
                        <label><People  className='ico-con'  /> Last Name</label><br />
                        <input className='col-md-6'  type='text' name='lastname' placeholder='Enter your last name'/><br />
                    </div>
                    <div className=''> 

                        <label className='col-md-6' ><Chat  className='ico-con' /> Email Adress</label><br />
                        <input className='col-md-6'  type='email' name='email' placeholder='Enter your email adress'/><br />
                        </div>
                      <div className=''> 

                        <label><File  className='ico-con' /> Subject</label><br />
                        <input className='col-md-6' type='text' name='text' placeholder='What is this message about?'/><br />
                      </div>
                       
                        <label><Chat  className='ico-con'/> Message</label><br />
                        <textarea className=''  type='text' name='text' placeholder='Tell us more about your inquiry...'/><br />
                      
                        <button className='sendbtn' type='submit'><Send />  Send Message</button><br />
                    </form>
                    <p className='grey'>We typically respond within 24 hours. For urgent matters, please call us directly at<Link className='links'>+251 941 250 000</Link> </p>
                </div>
                 
            </div>
            <div className='get'    >
                <div className='sign-texts'>
                    <div className='pre-text cotact-info text-favo'>
                        <Headphones />
                        <p>Contact Information</p>
                    </div>
                    <div className='taste'>
                        <p className='you'>Get in Touch</p><br/>
                        <p className='tasteT cata-sign'>Your Way</p>
                    </div>
                    <div className='difference'>
                        <p className='grey'>Choose the contact method that works best for you.</p>
                    </div>
                </div>
            </div>
            <div className='callUs row'>
                <div className='toSpace col-lg-4  items'> 
                    <div  to='tel:+251941250000' className='fresh wayer'>
                        <div className='iconals'>
                        <p className='meem nonn ech'><Phone size={35}  /></p>
                        </div>  
                        <p className='alw-top callUss'>Call Us</p>
                        <p className='grey redf'>+251 94 125 0000</p>
                        <p className='grey'>Available daily 10:00 AM - 10:00 PM</p>
                        <div className='lelalela '>                          
                            <button  className='pre-find ykrta'>Call Now</button>
                        </div>
                    </div>
                </div>
                <div className='toSpace col-lg-4 items'> 
                    <div className='fresh wayer'>
                        <div className='iconals'>
                        <p className='meem nonn ech'><Chat size={35}  /></p>
                        </div>  
                        <p className='alw-top callUss'>Email Us</p>
                        <p className='grey redf'>info@mrchickenet.com</p>
                        <p className='grey'>Response within 2 hours during business hours</p>
                        <div className='lelaleala'>                          
                            <button className='pre-find ykrta '>Send Email</button>
                        </div>
                    </div>
                </div>
                <div className='toSpace col-lg-4  items'> 
                    <div className='fresh wayer'>
                        <div className='iconals'>
                        <p className='meem nonn ech'><Clock size={35}  /></p>
                        </div>  
                        <p className='alw-top callUss'>Visit Hours</p>
                        <p className='grey unique'>Daily: 10:00 AM - 10:00 PM</p>
                        <p className='uni-gain'>Currently Open</p>
                        <div className='lelalela'>                          
                            <button className='pre-find ykrta '>View Location</button>
                        </div>
                    </div>
                </div>
                 
            </div>
            <div className='findUs'>
                <div className='sign-texts'>
                    <div className='pre-text cotact-info text-favo'>
                        <Send />
                        <p>Find Us</p>
                    </div>
                    <div className='taste'>
                        <p className='you'>Visit Our</p><br/>
                        <p className='tasteT cata-sign'>Restaurant</p>
                    </div>
                    <div className='difference for-mask'>
                        <p className='grey'>Located in the heart of Bole, Addis Ababa. Easy to find with convenient parking available.</p>
                    </div>
                </div>
            </div>
            <div className='bole'>
                <div className='local-place'>
                    <div className='place-wraper'>
                        <div className='mr-lock'>
                        <div className='iconals'>
                            <p className='meem'>
                                <Map  />
                            </p>
                        </div>
                            <div className='text-part'>
                            <p className='mr-part'>Mr. Chicken Location</p>
                            <p className='dec-parts grey'>Bole, Addis Ababa</p>
                            </div>
                        </div>
                        <div className='real-lock'>
                           <MapComponent/>
                            
                        </div>
                        <div className='easy-park'>
                        <div className='park grey'>Easy parking avilable</div>
                        <div className='open'>
                            <Dot size={38} />
                            Open Now
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='adress row'>
                <div className='toSpace makrebiya col-sm-6  items'> 
                    <div className='fresh wayer almaost'>
                        <div className='iconals'>
                        <p className='meem nonn bado'><Map size={35}  /></p>
                        </div>  
                        <p className='alw-top callUss'>Address</p>
                        <p className='grey unique'>Bole, Addis Ababa, Ethiopia</p>
                        <p className='uni-gain greys'>Easy parking available</p>
                         
                    </div>
                </div>
                <div className='toSpace makrebiya col-sm-6  items'> 
                    <div className='fresh wayer almaost'>
                        <div className='iconals'>
                        <p className='meem nonn bado'><Send size={35}  /></p>
                        </div>  
                        <p className='alw-top callUss'>Getting Here</p>
                        <p className='grey unique'>Central Bole location</p>
                        <p className='uni-gain greys'>Well-connected area</p>
                         
                    </div>
                </div>
            </div>
            <div className='supportCenter findUs'>
                <div className='sign-texts'>
                    <div className='pre-text cotact-info text-favo'>
                        <QuestionCircle />
                        <p>Support Center</p>
                    </div>
                    <div className='taste'>
                        <p className='you'>Frequently Asked</p><br/>
                        <p className='tasteT cata-sign'>Questions</p>
                    </div>
                    <div className='difference'>
                        <p className='grey'>Find quick answers to common questions about our services, menu, and dining experience.</p>
                    </div>
                </div>
            </div>
            <div className='offer'>
                <div className='offer-wraper'>
                    <div onClick={toVisual1} className='doYouer'>
                    <div  className='doYou'>
                        <p><Dot size={37} color='#ff5429' /> Do you offer catering services?</p> 
                        <p className='grey'>{visualize1? <CaretUp />: <CaretDown />}</p>
                    </div>
                        {visualize1 && (<p className='grey formar'>Yes, we offer catering for events of all sizes. Please contact us for more information and to discuss your specific needs.</p>)}
                    </div>
                    <div onClick={toVisual2} className='doYouer'>
                    <div  className='doYou'>
                        <p><Dot size={37} color='#ff5429' /> Are reservations required?</p> 
                        <p className='grey'>{visualize2? <CaretUp />: <CaretDown />}</p>
                    </div>
                        {visualize2 && (<p className='grey formar'>While walk-ins are welcome, we recommend making reservations, especially for weekends and larger groups to ensure availability.</p>)}
                    </div>
                    <div onClick={toVisual3} className='doYouer'>
                    <div  className='doYou'>
                        <p><Dot size={37} color='#ff5429' /> Do you have vegetarian options?</p> 
                        <p className='grey'>{visualize3? <CaretUp />: <CaretDown />}</p>
                    </div>
                        {visualize3 && (<p className='grey formar'>We have a selection of delicious vegetarian dishes on our menu. Please inform your server of any dietary requirements.</p>)}
                    </div>
                    <div  onClick={toVisual4} className='doYouer'>
                    <div className='doYou'>
                        <p><Dot size={37} color='#ff5429' /> Is there parking available?</p> 
                        <p className='grey'>{visualize4? <CaretUp />: <CaretDown />}</p>
                    </div>
                        {visualize4 && (<p className='grey formar'>We have a dedicated parking lot for our guests. Valet parking is also available during dinner hours on weekends.</p>)}
                    </div>
                     

                </div>
            </div>
            <div className='still'>
                <div className='sign-texts'>
                    <div className='pre-text cotact-info stillNeed text-favo'>
                        <People size={45} />
                    </div>
                    <div className='taste'>
                        <p className='you'>Still Need Help?</p> 
                    </div>
                    <div className='difference'>
                        <p className='grey'>Our team is ready to assist you personally.</p>
                    </div>
                </div>
                <div className='pre-flex-div'>
                    <Link to='tel:+251941250000' className='pre-exp'><Phone />Call Us Now <ArrowRight className='toHover' /></Link>
                    <a href='#feedForm' className='pre-find'><Send /> Send Message</a>
                </div>
            </div>

           
        </div>
    </div>
  )
}

export default Contact