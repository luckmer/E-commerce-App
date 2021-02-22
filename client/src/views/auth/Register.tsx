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

function Register() {
    const [state, setstate] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [data, setData] = useState<any>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        const { name, value } = e.target;
        setstate({ ...state, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) :Promise<void> => {
        try {
            e.preventDefault();
            await axios.post("/user/register", { ...state }).then((res) => {
                return setData({ ...res.data }) ;
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Article>
            <Header>Register</Header>
            {data.title ? <Information>{data.title}</Information> : ""}
            <div>
                <Form onSubmit={handleSubmit}>
                    <label>Name </label>
                    <input
                        placeholder='Enter name '
                        name='name'
                        onChange={handleChange}
                    />
                    <label htmlFor='email'> Email</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='email'
                        placeholder='Enter Email Address'
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='password'
                        placeholder='Enter Password'
                    />
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input
                        type='text'
                        placeholder='confirm'
                        name='confirmPassword'
                        onChange={handleChange}
                    />
                    <Row>
                        <button type='submit'>Register</button>
                    </Row>
                </Form>
            </div>
            <Footer>
                <p>Already an account </p>
                <Link to='/login'>Login</Link>
            </Footer>
        </Article>
    );
}

export default Register;
