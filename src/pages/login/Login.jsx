import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="login">
            <div className="loginwrapper">
                <div className="loginleft">
                    <h3 className="loginlogo">Socioface</h3>
                    <span className="logindesc">Better connecting you with the pages and groups you care about.</span>
                </div>
                <div className="loginright">
                    <div className="loginbox">
                        <input placeholder="Email" className="logininput" />
                        <input placeholder="password" className="logininput" />
                        <Link to="/Profile" className="loginbutton"> Log In</Link>
                        <span className="loginforgot">Forget password?</span>
                        <button className="loginregister">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
<div className="login">

</div>