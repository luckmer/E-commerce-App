import { useEffect } from "react";
import {
    Article, Grid, GridDiv, Margin,
    Description, Context, BuyPanel, Text,
    NexProducts,GridContext
} from "../styles/views/Details.Style";
import { Card,CardData,Hide } from "../styles/views/Catalog";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux"; 
import { ContactPanel } from "../exports/Exports";
import { Cart,DetailsNextPage } from "../reducers/UserSlice";
import { Link } from "react-router-dom";
import axios from "axios";

interface RootState {
    user : (string|any)
}

interface MATCHPARAMS {
    id: string;
    match: any;
}
interface DATA{
    images: string;
    title: string;
    count: number;
    description: string;
    price: number;
    _id: string;
}

interface CHECKPROPS {
    newId: string | number | any;
    check: string | number | any;
}

interface MapData{
    _id: string;
    title: string;
    images?: string;
    category:string
}

const Details = ({match}: MATCHPARAMS) =>  {
    
    const { id } = match.params; 
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const data = useTypedSelector((state) =>
        state.user.data.find((item: any) => item._id.includes(id)));
    const CartData = useTypedSelector((state) => state.user);
    const dispatch = useDispatch()

    const { check } : CHECKPROPS= {
        newId: new URLSearchParams(window.location.search).get("id") || null,
        check: new URLSearchParams(window.location.search).get("check") || null,
    };  

    const handleClick = (id:string) => {
        let Add = CartData.data.filter((item: any) => {
            return item._id.includes(id)
        });
        let create = CartData.cart.concat(Add);
        let table = CartData.cart.every((item: (string | number | any)) => item._id !== id);
        if (table) {
            axios.patch(`/user/cart`, create);
            dispatch(Cart({ data: create }));
        }
    }

    useEffect(() => {
        if (CartData.data) {
            let dataS = CartData.data.slice(3, 8);
            
            if (check) {
                dataS = dataS.filter((item: any) => item.category
                    .toLowerCase().trim()
                    .includes(check.toLowerCase().trim()));
            }
            
            if (dataS.includes(data) && data) {
                dataS =  dataS.filter((item:(any |string)) => item._id !== data._id);
            }

            dispatch(DetailsNextPage({ data: dataS }));
        }
    }, [CartData.data, check, dispatch,data]);


    console.log(CartData.detailsData)

    if (data) {
        const { images, title, description, price, _id }: DATA = data;

        return (
            <Article>
                <Grid>
                    <GridDiv>
                        <div>
                            <img src={images} alt ={images} />
                        </div>
                    </GridDiv>
                    <GridDiv>
                        <Margin>
                            <h1>{title}</h1>
                            <p>price {price} $ </p>
                            <Description>
                                <p>{description}</p>
                            </Description>
                            <BuyPanel >
                                <button onClick = {()=>handleClick(_id)} >BUY</button>
                            </BuyPanel>
                        </Margin>
                    </GridDiv>
                </Grid>
                <Grid>
                    <Context>
                        <Text>
                            <h1>description</h1>
                        </Text>
                        <hr />
                            <h1>description</h1>
                        <p>{description}</p>
                        <hr/>
                    </Context>
                </Grid>
                <Grid>  
                    <NexProducts>
                        {CartData.detailsData ? (
                            <GridContext>
                                {CartData.detailsData.map(({ _id, title, images,category }: MapData) => (
                                    <div key={_id}>
                                        <Card>
                                            <CardData>
                                                <header>{title}</header>
                                            </CardData>
                                            <Hide>
                                                <Link to={`/details/${_id}?id=${_id}&check=${category}`} >
                                                    <img src={images} alt={images} />
                                                </Link>
                                            </Hide>
                                        </Card>
                                    </div>
                                ))}
                            </GridContext>
                        ) : (
                            <div><p>Loading...</p></div>
                            )}
                        {CartData.detailsData.length  === 0 ? <div><p>no products </p></div>  : ""}
                    </NexProducts>
                </Grid>
                <ContactPanel/>
            </Article>
        )
    };
    return <div>Loading...</div>
}

export default Details
