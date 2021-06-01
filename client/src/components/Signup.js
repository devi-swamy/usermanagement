import React from 'react'

const Signup = ({children,username,password,onChange,fullname,email}) => {
    return (
        <div className="Login">

            <label><strong>FullName</strong>
            <input type="text" name="fullname" id="fullname" value={fullname} onChange={onChange} placeholder="Fullname"/></label>

            <label><strong>EmailAddress</strong>
            <input type="text" name="email" id="email" value={email} onChange={onChange} placeholder="Emailaddress"/></label>

            <label><strong>UserName</strong>
            <input type="text" name="username" id="username" value={username} onChange={onChange} placeholder="Username"/></label>

            <label><strong>Password</strong>
            <input type="password" name="password" id="password" value={password} onChange={onChange} placeholder="Password"/></label>

            <div className="col-8">

            <input type="button"  className="loginbtn" value="SIGNUP" /></div>        
        </div>
    )
}

export default Signup
