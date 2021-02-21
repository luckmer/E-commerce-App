
interface DataControl {
    page: number;
    limit: number;
    filtered: string;
    setPage: any;
}

function Control({ page, limit, filtered, setPage } : DataControl) {
    const Length = page * limit; // 9 
    const Post = Length - limit; // 0
    const contextView = filtered.slice(Post, Length); // > 0 new page 
    const paginate = (index : any) => setPage(index);
    return {contextView , paginate}
}

export default Control
