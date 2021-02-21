import { useEffect } from "react";
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux";
import { FilteredData } from "../reducers/UserSlice";


interface RootState {
    user: {
        data:any[]
    }
}


function FilterData(filterValue: any) {
    const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector
    const short = useTypedSelector((state) => state.user.data);
    const dispatch = useDispatch();

    useEffect(() => {
        let filterS = short.slice();

        if (filterValue.name) {
            filterS = filterS.filter((item) =>
                item.title
                    .toLowerCase()
                    .trim()
                    .includes(filterValue.name.toLowerCase().trim())
            );
        }

        if (filterValue.category) {
            filterS = filterS.filter((item) =>
                item.category
                    .toLowerCase()
                    .trim()
                    .includes(filterValue.category.toLowerCase().trim())
            );
        }

        if (filterValue.value) {
            filterS = filterS.filter((item) =>
                item.price
                    .toString()
                    .includes(filterValue.value.toString().trim())
            );
        }

        dispatch(FilteredData(filterS));
    }, [
        short,
        filterValue.name,
        filterValue.category,
        filterValue.value,
        dispatch,
    ]);
}

export default FilterData;
