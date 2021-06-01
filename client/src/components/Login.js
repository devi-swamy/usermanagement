import React from 'react'

const Login = ({children,username,password,onChange}) => {
    return (
        <div className="Login">
            <label><strong>UserName</strong>
            <input type="text" name="username" id="username" value={username} onChange={onChange} placeholder="Username"/></label>

            <label><strong>Password</strong>
            <input type="password" name="password" id="password" value={password} onChange={onChange} placeholder="Password"/></label>

            <div className="col-8">

            <input type="button"  className="loginbtn" value="LOGIN" /></div>        
        </div>
    )
}

export default Login
