import React, { useState } from "react";
import {
    Article,
    Footer,
    Form,
    Header,
    Row,
    Information,
} from "../../styles/views/STYLE";
import { Link } from "react-router-dom";
import axios from "axios";

interface StateProps {
    email: string;
    password: string;
}

const ChangePassword = () => {

    const [state, setState] = useState<StateProps>({ email: "", password: "" });
    const [text, setErr] = useState<any>("");

    const handleChange = (e  :React.ChangeEvent<HTMLInputElement>):void => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) : Promise<void> => {
        e.preventDefault();
        if (state.password && state.email) {
            try {
                await axios
                    .post("/user/forgot_password", { ...state })
                    .then((res) => {
                        return setErr({ ...res.data });
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <Article>
            <Header>Change Password</Header>
            {text.title ? <Information>{text.title}</Information> : ""}
            <div>
                <Form onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        name='email'
                        type='text'
                        value={state.email}
                        placeholder='enter Email Address'
                        onChange={handleChange}
                    />
                    <label htmlFor='password'>new Password</label>
                    <input
                        name='password'
                        type='password'
                        autoComplete='on'
                        value={state.password}
                        placeholder='Enter new password'
                        onChange={handleChange}
                    />
                    <Row>
                        <button type='submit'>Log In</button>
                    </Row>
                </Form>
            </div>
            <Footer>
                <Link to='/login'>Back</Link>
            </Footer>
        </Article>
    );
};

export default ChangePassword;
