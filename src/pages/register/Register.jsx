import './Register.css';

function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">V-Social</h3>
                <span className="loginDesc">Connect with friends and the world around you on V-Social.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Username' className="loginInput" />
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' type="password" className='loginInput' />
                    <input placeholder='Re-enter Password' type="password" className='loginInput' />
                    <button className="loginButton">Sign Up</button>
                    <button className='loginRegister'>Log in to your account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register