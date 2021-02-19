import { combineReducers } from "redux";
import UserSlice from "./UserSlice";

const Index = combineReducers({
    user: UserSlice,
});

export default Index;