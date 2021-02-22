import { useEffect } from "react";
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux";
import axios from "axios";
import {
    ConnectedUser,
    CurrentUserData,
    Products,
    Cart,
} from "../reducers/UserSlice";

interface RootState{
    user: {
        connected:boolean,
    }
}


function Api() {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const state = useTypedSelector((state)=> state);
    const dispatch = useDispatch();

    useEffect(() => {
        let check = axios.get("/user/loggedIn");
        if (check) {
            check.then((res) => {
                let data = res.data.result;
                dispatch(ConnectedUser(data));
            });
        }
    }, [dispatch]);

    useEffect(() => {
        if (state.user.connected === true) {
            try {
                axios.get("/user/currentUser").then(
                    ({
                        data: {
                            user: { cart, role, name },
                        },
                    }) => {
                        let user = { name, cart };
                        let isAdmin = role;
                        dispatch(
                            CurrentUserData({ data: user, check: isAdmin })
                        );
                        dispatch(Cart({ data: cart }));
                    }
                );
            } catch (err) {
                console.error(err);
            }
        }
    }, [dispatch, state.user.connected]);

    useEffect(() => {
        try {
            axios.get("/user/product").then((res) => {
                dispatch(Products({ test: res.data }));
            });
        } catch (err) {
            console.error(err);
        }
    }, [dispatch]);
}

export default Api;
