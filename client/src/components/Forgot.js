import React from 'react'

const Forgot = ({children,username,email,onChange}) => {
    return (
        <div className="Forgot">
            <label><strong>UserName</strong>
            <input type="text" name="username" id="username" value={username} onChange={onChange} placeholder="Username"/></label>

            <label><strong>Email Address</strong>
            <input type="text" name="email" id="email" value={email} onChange={onChange} placeholder="Emailaddress"/></label>

            <div className="col-8">

            <input type="button"  className="loginbtn" value="SUBMIT" /></div>        
        </div>
    )
}

export default Forgot
