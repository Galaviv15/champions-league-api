import { Route, Routes } from "react-router-dom";
import StandingsPage from "../pages/group-stage-standings-page/StandingsPage";
import "./main.css";


function Main(){


    return(
        <div className="Main">
            <Routes>
                <Route path="/" element={<StandingsPage />}/>

            </Routes>



        </div>
    )
}


export default Main;