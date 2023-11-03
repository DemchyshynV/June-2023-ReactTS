import {createBrowserRouter} from "react-router-dom";
import {MyConponent} from "./MyConponent";

let router = createBrowserRouter([
    {path: '/:id', element: <MyConponent/>}
]);

export {
    router
}