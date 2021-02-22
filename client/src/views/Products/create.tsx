import React, { useState } from "react";
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux";
import { Article, Form, Row,Header} from "../../styles/views/STYLE";
import { PageNotFound } from "../../exports/Exports";
import { Products } from "../../reducers/UserSlice";
import axios from "axios";

export interface RootState {
    user: {
        admin: (any | string);
    };
}
export interface StateProp {
    title: string;
    price: string;
    description: string;
    images: string;
    category: string;
    count: number;
}



function Create() {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
    const admin = useTypedSelector((state) => state.user.admin);
    const dispatch = useDispatch();
    const [state, setState] = useState<StateProp>({
        title: "",
        price: "",
        description: "",
        images:"",
        category: "",
        count: 1,
    });

    const { title, price, description, images, category } = state;

    const handleChange =  (e: React.ChangeEvent<HTMLInputElement>): void  => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (title && price && description && category && images ) {
            dispatch(Products({ test: [state] }));
            axios.post("/user/create", { ...state });
        };
    };

    return admin ? (
        <Article>
            <Header>Create Product</Header>
            
            <Form onSubmit={handleSubmit}>
                <input type='url' name='images' placeholder="set url" onChange={handleChange} />
                <input
                    onChange={handleChange}
                    type='text'
                    value={title}
                    name='title'
                    placeholder='title'
                />
                <input
                    onChange={handleChange}
                    type='number'
                    value={price}
                    name='price'
                    placeholder='price'
                />
                <input
                    onChange={handleChange}
                    type='text'
                    value={description}
                    name='description'
                    placeholder='description'
                />
                <input
                    onChange={handleChange}
                    type='text'
                    value={category}
                    name='category'
                    placeholder='category'
                />
                <Row>
                    <button type='submit'>Submit</button>
                </Row>
            </Form>
        </Article>
    ) : (
        <PageNotFound />
    );
}

export default Create;
