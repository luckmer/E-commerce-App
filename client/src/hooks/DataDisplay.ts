import { useDispatch } from "react-redux";

interface IPerson {
    category: string;
    price: (number | string);
}

type MyMapLikeType = Record<string, IPerson>;

const DataDisplay = (state : any) => {
    let filtered = state.user.filteredData;
    let user = state.user.connected;
    let admin = state.user.admin;
    const dispatch = useDispatch();
    const categ = filtered.map(({ category }: MyMapLikeType) => category);
    const price = filtered.map(({ price } : MyMapLikeType) => price);
    const correctCategory = Array.from(new Set([...categ]));
    const correctPrice =  Array.from(new Set([...price]));

    return { filtered, dispatch, correctCategory, correctPrice, user, admin };
};

export default DataDisplay;
