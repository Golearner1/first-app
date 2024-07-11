// Working with
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader.jsx";

function RouteLayout(){
    return<>
    <MainHeader />
    <Outlet />
    </>
}
 export default RouteLayout;