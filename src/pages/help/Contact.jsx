import React from 'react'

function Contact() {
  return (
    <div className='contact'>
        <h3>Contact Us</h3>
        <form>
            <label>
                <span> your email: </span>
                <input type='email' name='email' required/>
            </label>
            <label>
                <span>your message:</span>
                <textarea name='message' required></textarea>
            </label>
            <button>Submit</button>
        </form>
      
    </div>
  )
}

export default Contact
