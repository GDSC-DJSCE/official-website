import React, { useState, useEffect, useContext } from "react"
// import Pulse from "react-reveal/Pulse"
import CoreTeamSection from "./CoreTeamSection"
import CoCommSection from "./CoCommSection"
// import { Button } from "reactstrap"
import { Button } from "@material-ui/core"
import background from "../../assets/images/team/Team-bg.svg";
import { ThemeContext } from "../../ThemeContext";

const NewTeam = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const { darkMode } = useContext(ThemeContext);

    // true if current team is core
    const [currentTeam, setCurrentTeam] = useState(true)
    return (
        <>
            <img alt="background" className="topimg" src={background} />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="row justify-content-center" style={{marginBottom:"40px"}}>
                    {/* <Pulse> */}
                        <div className="col-12 col-sm-6 text-center">
                            <Button
                                style={
                                    currentTeam
                                        ? activeButtonStyle
                                        : inactiveButtonStyle
                                }
                                outline
                                onClick={() => setCurrentTeam(true)}
                            >
                                <span style={{color:darkMode?"white":"black"}}>Core Committee</span>
                            </Button>
                        </div>
                        <div className="col-12 col-sm-6 text-center">
                            {" "}
                            <Button
                                style={
                                    currentTeam
                                        ? inactiveButtonStyle
                                        : activeButtonStyle
                                }
                                outline
                                onClick={() => setCurrentTeam(false)}
                            >
                                <span style={{color:darkMode?"white":"black"}}>Committee</span>
                            </Button>
                        </div>
                    {/* </Pulse> */}
                </div>
            </div>
            {currentTeam ? <CoreTeamSection /> : <CoCommSection />}
        </>
    )
}

const activeButtonStyle = {
    height: "70px",
    width: "200px",
    border:"2px solid #03fdfc",
}
const inactiveButtonStyle = {
    height: "70px",
    width: "200px",
    border:"2px solid #747474",
}

export default NewTeam;
