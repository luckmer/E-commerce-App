import { Section,Grid } from "../styles/views/ContactPanel";

const ContactPanel = () => {
    const n = 1;
    let view = [...Array(n)].map(() => (
        <Grid key={n}>
            <ul>
                <div>
                    <header>About</header>
                </div>
                <div>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </div>
            </ul>
            <ul>
                <div>
                    <header>Companies</header>
                </div>
                <div>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </div>
            </ul>
            <ul>
                <div>
                    <header>More</header>
                </div>
                <div>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </div>
            </ul>
        </Grid>
    ));

    return (
            <Section>{view}</Section>
    );
}

export default ContactPanel
