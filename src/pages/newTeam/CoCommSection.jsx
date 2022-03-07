import React from "react"
// import Pulse from "react-reveal/Pulse"
import Card from "./Card/Card"
import coComm from "./CoComm"
import "./CoComm.css"
import domainTeam1 from "./Members/Domain1"
import domainTeam2 from "./Members/Domain2";
import projectTeam from "./Members/Project";
import eventTeam from "./Members/Event";
import contentTeam from "./Members/Content";


const CoCommSection = () => {
    return (
        <section
            className="team2 cid-s8XcCyHzmg"
            id="team02-8"
            style={{ padding: "20px 40px"}}
        >
            <div className="container-fluid">
                <h3 className="CoCommHeader mbr-section-title mbr-fonts-style align-center">
                    <strong>Technical Team</strong>
                </h3>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={domainTeam1[1]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={domainTeam1[2]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={domainTeam2[1]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={domainTeam2[2]} />
                    </div>
                </div>
                <h3 className="CoCommHeader mbr-section-title mbr-fonts-style align-center">
                    <strong>Project Team</strong>
                </h3>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={projectTeam[1]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={projectTeam[2]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={projectTeam[3]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={projectTeam[4]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={projectTeam[5]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={projectTeam[6]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={projectTeam[7]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={projectTeam[8]} />
                    </div>
                </div>
                <h3 className="CoCommHeader mbr-section-title mbr-fonts-style align-center">
                    <strong>Content & Editorial Team</strong>
                </h3>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={contentTeam[1]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={contentTeam[2]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={contentTeam[3]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={contentTeam[4]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={contentTeam[5]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={contentTeam[6]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={contentTeam[7]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={contentTeam[8]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={contentTeam[9]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={contentTeam[10]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={contentTeam[11]} />
                    </div>
                </div>
                <h3 className="CoCommHeader mbr-section-title mbr-fonts-style align-center">
                    <strong>Event & Outreach Team</strong>
                </h3>
                <div
                    className="row justify-content-around"
                    style={{ marginTop: "5%" }}
                >
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={eventTeam[1]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={eventTeam[2]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={eventTeam[3]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={eventTeam[4]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={eventTeam[5]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={eventTeam[6]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={eventTeam[7]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={eventTeam[8]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={eventTeam[9]} />
                    </div>
                    <div className="col-sm-8 col-md-5 col-lg-4 col-10">
                        <Card member={eventTeam[10]} />
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
