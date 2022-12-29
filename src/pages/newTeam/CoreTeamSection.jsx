import React from "react"
// import Pulse from "react-reveal/Pulse"
import Card from "./Card/Card"
// import coreTeam from "./CoreTeam"
import coreTeam from "./Members/Core";
import "./style.css"
const CoreTeamSection = () => {
    return (
        <section
            className="team2 cid-s8XcCyHzmg"
            id="team02-8"
            style={{ padding: "20px 40px",textAlign:'center' }}
        >
            <div className="container-fluid">
                {/* <div className="row justify-content-start">
                    <div
                        className="col-lg-8 col-md-12 pb-4"
                        style={{ paddingLeft: "0" }}
                    >
                        <Pulse>
                            <h4 className="mbr-section-subtitle mbr-fonts-style align-left pb-3 display-7">
                                OUR TEAM
                            </h4>
                            <h3 className="mbr-section-title mbr-fonts-style align-left mb-4 display-2">
                                <strong>
                                    A team of specialists with extensive
                                    experience
                                </strong>
                            </h3>
                        </Pulse>
                    </div>
                </div> */}

                {/* <div
                    className="pb-3 mbr-section-subtitle mbr-fonts-style align-left"
                    style={{
                        paddingLeft: "0",
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                    }}
                >
                    <h5 className="prof-subtitle">
                        Prof. Neha Katre - Branch Counsellor, GDSC
                    </h5>
                </div> */}

                {/* <hr
                    className="pb-4"
                    style={{ borderTopColor: "white", width: "50%" }}
                /> */}

                <div className="row justify-content-center">
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[0]} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[1]} />
                    </div>
                </div>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[2]} />
                        
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[3]} />
                    </div>
                </div>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[4]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[5]} />
                    </div>
                </div>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[6]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[7]} />
                    </div>
                </div>
                 
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[8]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[9]} />
                    </div>
                </div>
                 {/*<div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[12]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[11]} />
                    </div>
                </div>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[13]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[14]} />
                    </div>
                </div>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[15]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[16]} />
                    </div>
                </div>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[17]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[18]} />
                    </div>
                </div>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[19]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coreTeam[20]} />
                    </div>
                </div> */}
            </div>
        </section>
    )
}
export default CoreTeamSection
