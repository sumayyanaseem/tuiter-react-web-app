import Assignment6 from "./a6";
import Nav from "../nav";
import Classes from "./a6/classes";
import Styles from "./a6/styles";
import ConditionalOutput from "./a6/conditional-output";
import {Route, Routes} from "react-router";
import Assignment7 from "./a7";

function Labs() {
    return(
        <div>
            <Nav/>
            <Routes>
                <Route index
                       element={<Assignment6/>}/>
                <Route path="a7"
                       element={<Assignment7/>}/>
            </Routes>


        </div>
    );
}
export default Labs;

