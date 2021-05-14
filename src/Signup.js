import React from 'react'

function Signup() {
    return (
        <form className="text-center" id="names"> 
                <div className="spaces"></div>
                <h2>Welcome</h2>
                <h1>Blue Dolphin Engagement</h1>
                <div classNmae="spaces"></div>
                <h3>Sign Up</h3>
            <form className="names">
                <div className="spaces"></div>
                <input type="text" placeholder="Department Name*" className="department-name"></input>
            </form>
                <div className="spaces"></div>
            <form>
                <input type="email" placeholder="Department Email*" className="email"></input>
                <div className="spaces"></div>
                <input type="password" placeholder="Password*" className='password'></input>
             </form>
             <div className="little-space"></div>
             <form>
                 <input type="checkbox" className="checkbox"></input>
                 <p className="checkbox">I want to receive updates and promotions via email</p>
             </form>
             <div className="little-space"></div>
             <button type="submit" class="btn btn-secondary" id="button">Sign Up</button>
             <div className="little-space"></div>
             <a className="reminder" href="#">Already have an account? Log in</a>
        </form>
    )
}

export default Signup
