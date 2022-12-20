import React from "react"
// import Pulse from "react-reveal/Pulse"
import Card from "./Card/Card"
// import coComm from "./CoComm"
import "./CoComm.css"
// import domainTeam1 from "./Members/Domain1"
// import domainTeam2 from "./Members/Domain2";
// import projectTeam from "./Members/Project";
// import eventTeam from "./Members/Event";
// import contentTeam from "./Members/Content";


import webdevteam from "./Members/WebDev"
import appdevteam from "./Members/AppDev"
import marketingteam from "./Members/Marketing"
import publicityteam from "./Members/Publicity"
import cyberteam from "./Members/Cyber"
import creativesteam from "./Members/Creatives"


const CoCommSection = () => {
    return (
        <section
            className="team2 cid-s8XcCyHzmg"
            id="team02-8"
            style={{ padding: "20px 40px",textAlign:'center'}}
        >
            <div className="container-fluid">
                <h3 className="CoCommHeader mbr-section-title mbr-fonts-style align-center">
                    <strong>Web Dev Team</strong>
                </h3>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={webdevteam[0]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={webdevteam[1]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={webdevteam[2]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={webdevteam[3]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={webdevteam[4]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={webdevteam[5]} />
                    </div>
                </div>
                <h3 className="CoCommHeader mbr-section-title mbr-fonts-style align-center">
                    <strong>App Dev Team</strong>
                </h3>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={appdevteam[0]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={appdevteam[1]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={appdevteam[2]} />
                    </div>
                    
                </div>
                <h3 className="CoCommHeader mbr-section-title mbr-fonts-style align-center">
                    <strong>Cyber Team</strong>
                </h3>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={cyberteam[0]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={cyberteam[1]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={cyberteam[2]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={cyberteam[3]} />
                    </div>
                    
                </div>
                <h3 className="CoCommHeader mbr-section-title mbr-fonts-style align-center">
                    <strong>Creatives Team</strong>
                </h3>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={creativesteam[0]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={creativesteam[1]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={creativesteam[2]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={creativesteam[3]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={creativesteam[4]} />
                    </div>
                    
                </div>
                <h3 className="CoCommHeader mbr-section-title mbr-fonts-style align-center">
                    <strong>Marketing Team</strong>
                </h3>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={marketingteam[0]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={marketingteam[1]} />
                    </div>
                    
                    
                </div>
                <h3 className="CoCommHeader mbr-section-title mbr-fonts-style align-center">
                    <strong>Publicity Team</strong>
                </h3>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={publicityteam[0]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={publicityteam[1]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={publicityteam[2]} />
                    </div>
                    
                    
                </div>
                {/* <h3 className="CoCommHeader mbr-section-title mbr-fonts-style align-center">
                    <strong>Editorial Team</strong>
                </h3>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[28]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[29]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[30]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[31]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[32]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[33]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[34]} />
                    </div>
                </div>
                <h3 className="CoCommHeader mbr-section-title mbr-fonts-style align-center">
                    <strong>Creatives Team</strong>
                </h3>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[35]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[36]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[37]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[38]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[39]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[40]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[41]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[42]} />
                    </div>
                </div>
                <h3 className="CoCommHeader mbr-section-title mbr-fonts-style align-center">
                    <strong>Logistics Team</strong>
                </h3>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[43]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[44]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={coComm[45]} />
                    </div>
                </div> */}
            </div>
        </section>
    )
}
export default CoCommSection
