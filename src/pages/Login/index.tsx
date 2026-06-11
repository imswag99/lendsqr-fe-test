import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { useState } from "react";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login">
            <nav className="login__navbar">
                <img className="login__navbar__logo" src="/logo.png" alt="" />
            </nav>
            <main className="login__main">
                <div className="login__img">
                    <img src="/login.png" alt="" />
                </div>
                <div className="login__form">
                    <div className="login__form__header">
                        <h1>Welcome</h1>
                        <p>Enter details to login</p>
                    </div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();

                            if (
                                email === "admin@lendsqr.com" &&
                                password === "password"
                            ) {
                                localStorage.setItem("isLoggedIn", "true");

                                navigate("/users");
                            }
                        }}
                    >
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="example@email.com"
                        />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="password"
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default LoginPage;
