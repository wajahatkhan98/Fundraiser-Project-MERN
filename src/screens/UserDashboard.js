import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";

const UserDashboard = () => {
    const [TotalUsers,setTotalUsers] = useState("loading ...")
    const [TotalRaised,setTotalRaised] = useState("loading ...")
    const [TotalMRaised,setTotalMRaised] = useState("loading ...")
    const [TotalDRaised,setTotalDRaised] = useState("loading ...")
    const [TotalWRaised,setTotalWRaised] = useState("loading ...")
    return(
        <Container fluid className="main-height">
            <Row>
                <Col lg={12} md={12}>
                    <div className="custom-chart-margin">
                        {/* <FinancialChartStockIndexChart/> */}
                        <h3 className="section-title">Dashboard</h3>
                        <div className="analytics">
                            <div className="dashboard-box">
                                <h3>{TotalUsers}</h3>
                                <hr />
                                <span>Total Users</span>
                            </div>
                            <div className="dashboard-box">
                                <h3>{TotalRaised}</h3>
                                <hr />
                                <span>Total Raised</span>
                            </div>
                            <div className="dashboard-box">
                                <h3>{TotalMRaised}</h3>
                                <hr />
                                <span>Monthly Raised</span>
                            </div>
                            <div className="dashboard-box">
                                <h3>{TotalWRaised}</h3>
                                <hr />
                                <span>Weekly Raised</span>
                            </div>
                            <div className="dashboard-box">
                                <h3>{TotalDRaised}</h3>
                                <hr />
                                <span>Daily Raised</span>
                            </div>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    )
};


export default UserDashboard;