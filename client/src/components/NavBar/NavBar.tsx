import { useState, useEffect } from "react";
import { Nav, Menu, Header, DivPage } from "../../styles/components/Navbar";
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux";
import { Clear } from "../../reducers/UserSlice";
import { Link } from "react-router-dom";
import axios from "axios";

interface RootState{
    user: (string|number|boolean |any);
}


const NavBar = () => {
    const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector
    const data = useTypedSelector((state) => state.user);
    const [state, setState] = useState(false);
    const [scroll, setScroll] = useState(false);
    const dispatch = useDispatch();

    const handleClick = async () =>{
        try {
            await axios.get("/user/logout");
            window.location.href = "/";
            dispatch(Clear({ one: false }));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.pageYOffset > 70 ? setScroll(true) : setScroll(false);
        });
    }, []);

    return (
        <Nav style={{ background: scroll ? "#F3F3F3" : "" }}>
            <Menu state ={state} onClick={() => setState(!state)}>
                <div />
                <div />
                <br />
            </Menu>
            <Header scroll={scroll} state={state}>
                <DivPage>
                    <ul onClick={() => setState(!state)}>
                        <Link to='/catalog'>
                            <li>Catalog</li>
                        </Link>
                    </ul>
                    <ul onClick={() => setState(!state)}>
                        {data.admin ? (
                            <Link to='/create_product'>
                                <li>Create Product</li>
                            </Link>
                        ) : (
                            ""
                        )}
                    </ul>
                </DivPage>
                <ul onClick={() => setState(!state)}>
                    <Link to='/'>
                        <li><h3>HAPPYSHOES</h3></li>
                    </Link>
                </ul>
                <DivPage>
                    <ul onClick={() => setState(!state)}>
                        <Link to='/cart'>
                            <li>
                                Cart <span>( {data.cart.length } )</span>
                            </li>
                        </Link>
                        <li></li>
                    </ul>
                    <ul onClick={() => setState(!state)}>
                        {data.connected ? (
                            <li onClick={handleClick}> Logout </li>
                        ) : (
                            <Link to='/login'>
                                <li>login/register</li>
                            </Link>
                        )}
                    </ul>
                </DivPage>
            </Header>
        </Nav>
    );
};

export default NavBar;
