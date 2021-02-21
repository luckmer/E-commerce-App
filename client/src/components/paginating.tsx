import { Container } from "../styles/components/Paginate";


interface Define {
    paginate: any;
    LimitControl: number;
    totalPosts :any
}

function Paginating({ paginate, LimitControl, totalPosts }: Define) {
    const result : number[] = [];
    
    const Length = Math.ceil(totalPosts / LimitControl);
    for (let i = 1; i <= Length; i++) {
        result.push(i);
    }
    return (
        <Container>
            {result.map((i) => (
                <button key={i} onClick={() => paginate(i)}>
                    {i}
                </button>
            ))}
        </Container>
    );
}

export default Paginating;
