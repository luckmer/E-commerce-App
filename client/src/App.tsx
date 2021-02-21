import { Switch, Route, useLocation } from "react-router-dom";
import { NavBar } from "./exports/Exports";
import { Api } from "./exports/Exports";
import { routes } from "./routes/Routes";

const App = () => {
    const location = useLocation();
    Api();
    return (
        <>
            <NavBar />
            <Switch location={location} key={location.pathname}>
                {routes.map(({path,Component})=> <Route key={path} exact path={path} component ={Component}  />)}
            </Switch>
        </>
    );
};

export default App;
