import React from "react";
import Profile from "../Components/Home/Profile";
import Weather from "../Components/Home/Weather";
import News from "../Components/Home/News";
import AllNotes from "../Components/Home/AllNotes";
import TimerCard from "../Components/Home/TimerCard";
import { Navigate, useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();

    const goNext = () => {
        navigate('./EntertainmentPage')
    }

    return (
        <>
            <Profile />
            <Weather />
            <News />
            <AllNotes />
            <TimerCard />

            <button style={{ height: "40px", width: "130px", borderRadius: "20px", color: "white", backgroundColor: "green", margin: "32vh 0 0 80vw", border: "solid", borderColor: "black", fontSize: "1.1rem", fontFamily: "DM Sans", textAlign: "center" }} onClick={goNext}>Browse</button>



        </>

    )
}

export default HomePage