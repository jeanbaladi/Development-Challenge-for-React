import React, {useState} from "react";
import {Link} from "react-router-dom";
    //=================== style CSS ========================= 
import "../../style/App.css";
    //=================== Image =============================
import logoFc from "../../Utils/img/icons8-facebook-rodeado-de-círculo-48.png";
import logoTw from "../../Utils/img/icons8-twitter-cuadrado-48.png";
import logoGg from "../../Utils/img/icons8-google-plus-48.png";
function Login() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [userConfirm, setUserConfirm] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

            // take input value
    const handleText = ({target}) => {
        setUser(target.value)
    }
    const handlePassword = ({target}) => {
        setPassword(target.value)
    }
    const confirmUser = ({target}) => {
        setUserConfirm(target.value)
    }
    const confirmPassword = ({target}) => {
        setPasswordConfirm(target.value)
    }
    console.log(user);
    const handleSubmit = (e) => {
        e.preventDefault()
    }

        //======================= Sign up form =============================
    const register = () => {
        if((user.length === 0) || (password.length === 0)) {
            document.getElementById("txtId").placeholder = "Please, complete your data";
            document.getElementById("pwd").placeholder = "Please, complete your data";
        }else {
            let loginStyle = document.getElementById("loginId");
            let socialStyle = document.getElementById("socialId");
            loginStyle.classList.add('visible');
            socialStyle.classList.add('translate-social');
            setUser('');
            setPassword('');
            document.getElementById("txtId").disabled = true;
            document.getElementById("pwd").disabled = true;
            document.getElementById("cbxId").disabled = true;
            localStorage.setItem('user', user);
            localStorage.setItem('password', password);
        }
    }
        let UserStorage = localStorage.getItem('user');
        let passwordStorage = localStorage.getItem('password');
        console.log(UserStorage);
        console.log(passwordStorage);
        let btn = document.getElementById("btnLogin");
        if ((userConfirm === UserStorage) && (passwordConfirm === passwordStorage)){
            btn.disabled = false;
        }

        //====================== function to show password ==========================
    const viewPassowrd = () => {
        let password = document.getElementById("pwd");
        document.form.cbx.checked === true ? password.type = "text" : password.type = "password";
    }
    const viewPasswordLogin= () => {
        let password = document.getElementById("passwordLogin");
        document.formLogin.cbxLogin.checked ? password.type = "text" : password.type = "password";
    }
    return (
        <div className="container-Login">
            <div className="position-login">
                <div className="register">
                    <h2>Sign up</h2>
                    <form onSubmit={ handleSubmit } name="form">
                        <label>Username</label>
                        <input type="text" placeholder="Type your username" value={user} id="txtId" onChange={handleText} required/>
                        <label>Password</label>
                        <input type="password" placeholder="Type your password" value={password} id="pwd" onChange={handlePassword} required/>
                        <label>
                            <input type="checkbox" id="cbxId" name="cbx" onClick={() => viewPassowrd()}/>
                            <span><i>Show password 👁</i></span>
                        </label>
                        <input type="button" className="btn-style" value="Create new account"  onClick={() => register()} /> 
                    </form>
                </div>
                <div className="social-red" id="socialId">
                    <i>Or sign up using</i>
                    <div className="social-img">
                        <img src={logoFc} alt="logo de Facebook" />
                        <img src={logoTw} alt="logo de Twitter" />
                        <img src={logoGg} alt="logo de Google" />
                    </div>
                </div>
                <div className="login" id="loginId">
                    <h2>Sign in</h2>
                    <form name="formLogin">
                        <label>Username</label>
                        <input type="text" placeholder="Type your username" value={userConfirm} onChange={confirmUser} />
                        <label>Password</label>
                        <input type="password" placeholder="Type your password" id="passwordLogin" value={passwordConfirm} onChange={confirmPassword}/>
                        <label><i>Forgot password?</i></label>
                        <label>
                            <input type="checkbox" id="cbxIdLogin" name="cbxLogin" onClick={() => viewPasswordLogin()}/>
                            <span><i>Show password 👁</i></span>
                        </label>
                        <Link to="/main"><input type="button" className="btn-style btn-disabled" id="btnLogin" value="login" disabled /></Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;