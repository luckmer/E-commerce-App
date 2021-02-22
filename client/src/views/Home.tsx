import { Article,Header,Section,SectionImgI,SectionImgII} from "../styles/views/Home";
import { useSelector , TypedUseSelectorHook } from "react-redux";
import { ContactPanel } from "../exports/Exports";

interface RootState{
    user: {
        data:any
    },
}

const Home = () => {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const state = useTypedSelector((state ) => state.user.data);
    const test = state.slice(1, 8).map(({ images }: any) => [images]);
    
    console.log(test[0])

    return (
        <Article>
            <Header>
                <img src={test[1]} alt={test[1]} />
            </Header>
            <Section>
                <div>
                    <h3>New Selection</h3>
                    <hr/>
                    <SectionImgI>
                        <div>
                            <img src={test[0] } alt = {test[0]} />
                        </div>
                        <div>
                            <img  src={test[3] } alt = {test[3]} />
                        </div>
                        <div>
                            <img   src={test[6] } alt = {test[0]} />
                        </div>
                    </SectionImgI>
                    <hr />
                    <SectionImgII>
                        <div>
                            <img  src={test[2] } alt = {test[3]} />
                        </div>
                        <div>
                            <img  src={test[4] } alt = {test[3]} />
                        </div>
                        <div>
                        <img src={test[5] } alt = {test[0]} />
                        </div>
                    </SectionImgII>
                </div>
            </Section>
            <ContactPanel/>
        </Article>
    )
}

export default Home;
