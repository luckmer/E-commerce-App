import { useState } from "react";
import {RootState,IProps_Square ,StateData} from "../interfaces/Catalog.interface";
import{Filtered,Control,DataDisplay,CatalogData} from "../exports/Exports";
import { useSelector,TypedUseSelectorHook } from "react-redux";
import { FilteredData, Cart } from "../reducers/UserSlice";
import axios from "axios";

const Catalog = () => {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
    const state = useTypedSelector((state) => state);
    const CartData = useTypedSelector((state) => state.user);
    const [page, setPage] = useState<number>(1);
    const [limit] = useState<number>(9);
    const [filterValue, setFilterValue] = useState<StateData>({
        name: "",
        category: "",
        value: "",
    });
    Filtered(filterValue);
    let {
        filtered, dispatch, correctCategory, correctPrice, user, admin
    } = DataDisplay(state);
    let {
        contextView, paginate
    } = Control({
        page, limit, setPage, filtered
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setFilterValue({ ...filterValue, [e.target.name]: e.target.value });
    }

    const handleDelete = ({ id } :IProps_Square) => {
        try {
            axios.delete(`/user/delete/${id}`);
            const updatPost = filtered.filter((i : any) => i._id !== id);
            dispatch(FilteredData(updatPost));
        } catch (err) {
            console.error(err);
        }
    };

    const handleClick = ({ id }: any ) => {
        try {
            let Add = CartData.data.filter((item: any) => {
                return item._id.includes(id)
            });
            let create = CartData.cart.concat(Add);
            let table = CartData.cart.every((item: (string | number | any)) => item._id !== id);
            if (table) {
                axios.patch(`/user/cart`, create);
                dispatch(Cart({ data: create }));
            }
        } catch (err) {
            console.error(err);
        }
    };

    return CatalogData(
        filterValue,
        handleChange,
        correctCategory,
        correctPrice,
        contextView,
        user,
        handleClick,
        admin,
        handleDelete,
        paginate,
        limit,
        filtered,
        page,
    );
};

export default Catalog;
