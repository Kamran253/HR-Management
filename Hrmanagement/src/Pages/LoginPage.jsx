import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; 

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);  
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");

   
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login", {
                email: loginEmail,
                password: loginPassword,
            });
            if (response.data.success) {
                localStorage.setItem('isAuthenticated', 'true'); 
                alert("Login successful!");
                window.location.href = "/Home";
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed!");
        }
    };
 
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/signup", {
                email: signupEmail,
                password: signupPassword,
            });
            if (response.data.success) {
                alert("Signup successful! You can now login.");
                setIsLogin(true); 
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Signup error:", error);
            alert("Signup failed!");
        }
    };
 
    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-container">
            <div className="form-container">
                {isLogin ? (
                    <>
                        <h2>Login</h2>
                        <form onSubmit={handleLoginSubmit}>
                            <div className="input-box">
                                <input
                                    type="email"
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                    required
                                />
                                <label>Email</label>
                            </div>
                            <div className="input-box">
                                <input
                                    type="password"
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                    required
                                />
                                <label>Password</label>
                            </div>
                            <button type="submit" className="button1">Login</button>
                        </form>
                        <p>
                            Don't have an account?{' '}
                            <span onClick={toggleAuthMode} className="toggle-link">
                                Signup here
                            </span>
                        </p>
                    </>
                ) : (
                    <>
                        <h2>Signup</h2>
                        <form onSubmit={handleSignupSubmit}>
                            <div className="input-box">
                                <input
                                    type="email"
                                    value={signupEmail}
                                    onChange={(e) => setSignupEmail(e.target.value)}
                                    required
                                />
                                <label>Email</label>
                            </div>
                            <div className="input-box">
                                <input
                                    type="password"
                                    value={signupPassword}
                                    onChange={(e) => setSignupPassword(e.target.value)}
                                    required
                                />
                                <label>Password</label>
                            </div>
                            <button type="submit" className="button1">Signup</button>
                        </form>
                        <p>
                            Already have an account?{' '}
                            <span onClick={toggleAuthMode} className="toggle-link">
                                Login here
                            </span>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginPage;
