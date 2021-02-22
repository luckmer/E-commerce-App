import { useState } from "react";
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux";
import { Products } from "../../reducers/UserSlice";
import { Article, Form, Row, Header} from "../../styles/views/STYLE";
import { PageNotFound } from "../../exports/Exports";
import axios from "axios";

export interface MapInf {
    _id: number;
    [key: string]: string | number;
}
export interface EditProps {
    id: number;
    [key: string]: string | number;
    newTask: any;
}
export interface NewPostProps {
    title: string;
    category: string;
    description: string;
    price: string;
}
export interface RootState {
    user: any;
}

interface State {
    title: string;
    category: string;
    description: string;
    price: string;
}


const Update = ({ match }:any) => {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
    const data = useTypedSelector((state) => state.user);
    const [newPost, setNewPost] = useState<State>({
        title: "",
        category: "",
        description: "",
        price: "",
    });

    const { id } = match.params;
    const dispatch = useDispatch();

    const editTask = async (id : number, newTask :any ) => {
        try {
            const editedTask = data.data.map((task: (string|any)) => {
                if (id === task._id) {
                    return {
                        ...task,
                        title:newTask.title,
                        description: newTask.description,
                    };
                }
                return task;
            });
            await axios.patch(`/user/update/${id}`, newTask);
            dispatch(Products({ test: editedTask }));
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange =  (e: React.ChangeEvent<HTMLInputElement>): void  => {
        setNewPost({ ...newPost, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) :void => {
        e.preventDefault();
        editTask(id, newPost);
        setNewPost({ title: "", category: "", description: "", price: "" });
    };

    return data.admin ? (
        <Article>
            <Header>Update Product</Header>
            <Form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    name='title'
                    value={newPost.title}
                    type='text'
                    placeholder='title'
                />
                <input
                    onChange={handleChange}
                    name='category'
                    value={newPost.category}
                    type='text'
                    placeholder='category'
                />
                <input
                    onChange={handleChange}
                    name='description'
                    type='text'
                    value={newPost.description}
                    placeholder='description'
                />
                <input
                    onChange={handleChange}
                    name='price'
                    type='number'
                    value={newPost.price}
                    placeholder='price'
                />
                <Row>
                    <button type='submit'>Submit</button>
                </Row>
            </Form>
        </Article>
    ) : (
        <PageNotFound />
    );
};

export default Update;
