import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
    Article,
    Footer,
    Form,
    Header,
    Row,
    Information,
} from "../../styles/views/STYLE";

interface StateProps{
    email: string;
    password: string;
}

function Login() {
    const [state, setstate] = useState<StateProps>({ email: "", password: "" });
    const [text, setErr] = useState<any>("");

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) : void => { 
        const { name, value } = e.target;
        setstate({ ...state, [name]: value });
    };

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) : Promise<void> => {
        try {
            e.preventDefault();
            axios
                .post("user/login", { ...state })
                .then((res) => {
                    return setErr({ ...res.data });
                })
                .catch((err) => {
                    console.error(err);
                });
            setTimeout(() => {
                window.location.href = "/";
            }, 1000);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Article>
            <Header>Login</Header>
            {text.title ? <Information>{text.title}</Information> : ""}
            <div>
                <Form onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        name='email'
                        type='text'
                        placeholder='enter Email Address'
                        onChange={handleChange}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        name='password'
                        type='password'
                        autoComplete='on'
                        placeholder='Enter Password'
                        onChange={handleChange}
                    />
                    <Row>
                        <button type='submit'>Log In</button>
                        <Link to='/PasswordChange'>Forgot your password? </Link>
                    </Row>
                </Form>
            </div>
            <Footer>
                <p>New Here? </p>
                <Link to='/register'>Register</Link>
            </Footer>
        </Article>
    );
}

export default Login;
