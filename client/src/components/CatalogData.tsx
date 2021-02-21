import { Link } from "react-router-dom";
import { Paginating, ContactPanel } from "../exports/Exports";
import{
    Container,
    Context,
    Card,
    DivHide,
    Hide,
    Search,
    CardData
} from "../styles/views/Catalog";


interface DATA {
    _id: number;
    title: string;
    images?: string;
    category: string;
}

const CatalogData = (
    filterValue: any,
    handleChange: any,
    correctCategory: any,
    correctPrice: any,
    contextView: any,
    user: boolean,
    handleClick: any,
    admin: boolean,
    handleDelete: any,
    paginate: any,
    limit: number,
    filtered: any[],
    page:number
) => {
    
    return (
        <Container>
            <Search page ={page}>
                <div>
                    <label htmlFor="name">search</label>
                    <input 
                        name='name'
                        value={filterValue.name}
                        placeholder='filter by name '
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor ="category">select category</label>
                    <select
                        name='category'
                        value={filterValue.category}
                        onChange={handleChange}>
                        <option value=''>Select</option>
                        {correctCategory.map((item : string, i: number) => (
                            <option key={i}>{item}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor ="value">select price </label>
                    <select
                        name='value'
                        value={filterValue.value}
                        onChange={handleChange}>
                        <option value=''>Select</option>
                        {correctPrice.map((item : string, i : number) => (
                            <option key={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </Search>
            <Context>
                {contextView.map(({ _id , title, images ,category } : DATA, index : number) => (
                    <div key={index}>
                        <Card>
                            <CardData>
                                <header>{title}</header>
                            </CardData>
                            <Hide>
                                <img src={images} alt={images} />
                                <DivHide>
                                    <Link to={`/details/${_id}?id=${_id}&check=${category}`}>
                                        <button>Details</button>
                                    </Link>
                                    {user ? (
                                        <button
                                            onClick={() =>
                                                handleClick({
                                                    check: index,
                                                    id: _id,
                                                })
                                            }>
                                            Buy
                                        </button>
                                    ) : (
                                        ""
                                    )}
                                    {admin ? (
                                        <>
                                            <button
                                                onClick={() =>
                                                    handleDelete({ id: _id })
                                                }>
                                                Delete
                                            </button>
                                            <Link to={`/update/${_id}`}>
                                                <button>update</button>
                                            </Link>
                                        </>
                                    ) : (
                                        ""
                                    )}
                                </DivHide>
                            </Hide>
                        </Card>
                    </div>
                ))}
            </Context>
            <Paginating
                paginate={paginate}
                LimitControl={limit}
                totalPosts={filtered.length}
            />
            <ContactPanel/>
        </Container>
    );
};

export default CatalogData;
