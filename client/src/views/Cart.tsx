import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { ClickProps,RootState} from "../interfaces/Cart.interface";
import { decrement, increment,PlaceAnOrder } from "../reducers/UserSlice";
import { Cart } from "../reducers/UserSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import {
    Article, ShopHeader, ScrollPanel,
    Context, ContextBox, ContextRow,
    ContextDelete,ArticleContext
} from "../styles/views/Cart";


const CartData = () => {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const state = useTypedSelector((state) => state.user.cart);
    const dispatch = useDispatch();


    const removeProduct = async (id:number) => {
        let check = state.filter((item:(any |string)) => item._id !== id);
        dispatch(Cart({ data: check }));
        await axios.patch("/user/cart", check);
    };

    const update = async () => {
        try {
            await axios.patch("/user/cart", state);
        } catch (err) {
            console.error(err);
        }
    };

    const Increment = (_id:ClickProps) => {
        axios.patch("/user/cart", state);
        dispatch(increment({ id: _id }));
    };
    const Decrement = (_id:ClickProps) => {
        update();
        dispatch(decrement({ id: _id }));
    };

    const Buy = async() => {
        try {
            dispatch(PlaceAnOrder({ data: [] }));
            await axios.patch("/user/cart", []);
        } catch (err) {
            console.error(err);
        }
    }

    const TotalPrice = state.reduce((price: number, item: any) => (
        price + item.price * item.count
    ), 0);
        
    return (
        <Article>
            <ShopHeader>
                <p>Total Items {state.length}</p>
                <p>Price {TotalPrice}</p>
            </ShopHeader>
            <ScrollPanel>
                {state.length === 0 ?
                    <Context>
                    <p>cart is empty </p>
                </Context>: (
                    state.map((item :any) => (
                        <Context key={item._id}>
                            <img src={item.images} alt={item.images} />
                            <ContextBox>
                                <ContextRow>
                                    <p>{item.title}</p>
                                    <span>{item.price * item.count} $</span>
                                </ContextRow>
                                <p>{item.description}</p>
                                <div>
                                    <button onClick={()=> Increment(item._id)} >+</button>
                                    {item.count}
                                    <button onClick ={()=> Decrement(item._id)}>-</button>
                                </div>
                            </ContextBox>
                            <ContextDelete onClick ={() => removeProduct(item._id)}>X</ContextDelete>
                        </Context>
                    ))
                )}
            </ScrollPanel>
            <ArticleContext>
                <Link to ="/catalog"  >continue</Link>
                <button onClick ={()=> Buy()}>BUY</button>
            </ArticleContext>
        </Article>
    );
};

export default CartData;
