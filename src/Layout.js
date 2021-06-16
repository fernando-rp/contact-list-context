import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
import EditUser from "./views/EditUser";
import ViewUsers from "./views/ViewUsers";

function Layout() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/:id/edit">
                        <EditUser />
                    </Route>
                    <Route exact path="/">
                        <ViewUsers />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default injectContext(Layout);