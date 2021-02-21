import { createSlice } from "@reduxjs/toolkit";


interface DataSliceInterface{
    connected: boolean;
    admin: boolean;
    data: any[];
    currentUserData: any[];
    filteredData: any[];
    cart: any[];
    detailsData: any[];
}

const initialState : DataSliceInterface= {
    connected: false,
    admin: false,
    data: [],
    currentUserData: [],
    filteredData: [],
    cart: [],
    detailsData:[]
};

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        ConnectedUser: (state, action) => {
            let check = action.payload;
            state.connected = check ? true : false;
        },
        CurrentUserData: (state, action) => {
            let { data, check } = action.payload;
            state.currentUserData = data;
            state.admin = check === 1 ? true : false;
        },
        Products: (state, action) => {
            let { test } = action.payload;
            let ss = state.data.concat(test);
            state.data = ss;
        },
        Clear: (state, action) => {
            let { one } = action.payload;
            state.connected = one;
            state.admin = one;
            state.currentUserData = [];
        },
        FilteredData: (state, action) => {
            state.filteredData = action.payload;
        },
        Cart: (state, action) => {
            let { data } = action.payload;
            state.cart = data;
        },
        increment: (state, action) =>{
            const { id } = action.payload
            const test = state.cart.find(item => item._id === id)
            if (test) {
                test.count += 1
            }
        },
        decrement: (state, action) =>{
            const { id } = action.payload
            const test = state.cart.find(item => item._id === id)
            if (test) {
                test.count <= 1 ? test.count = 1  : test.count -= 1
            }
        },
        DetailsNextPage: (state, action) => {
            const { data } = action.payload;
            state.detailsData = data;
        },
        PlaceAnOrder: (state,action) => {
            const { data } = action.payload;
            state.cart = data;
        }
    },
});

export const {
    ConnectedUser,
    decrement,
    increment,
    CurrentUserData,
    Products,
    Clear,
    FilteredData,
    Cart,
    PlaceAnOrder,
    DetailsNextPage
} = UserSlice.actions;
export default UserSlice.reducer;
