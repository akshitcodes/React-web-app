import React from 'react'
import "../styles/contact.scss"
const contact = () => {
    return (
        
        <div className='contact' >
            <main>
                <h1>Contact Us</h1>
                <form >
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" required placeholder='abc' />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" required placeholder='Xyz@abc.com' />
                    </div>
                    <div>
                        <label htmlFor="">Message</label>
                        <input type="text" required placeholder='Tell us about your query...' />
                    </div>
                     <button type='submit' >Send</button>
                </form>
        
           </main>
        </div>
    )
}

export default contact