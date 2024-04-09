import { Chip } from "@mui/material";
import { webColors } from "../../assets/constant";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./card";
import React from "react";
import { MapPinned } from "lucide-react";

const index = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="">
              <Chip
                style={{
                  background: webColors["primary-100"],
                  fontSize: 14,
                  fontWeight: 500,
                }}
                label="Logged in as Admin"
                variant="outlined"
              />
              <p className="my-0">
                <span style={{ fontSize: 22, fontWeight: 500 }}>
                  Good morning, Ramesh!
                </span>
                <br />
                <span style={{ color: webColors["neutral-grey-500"] }}>
                  View all the status and overview details.
                </span>
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-lg-3">
          <StatsCard />
        </Row>
      </Container>

    </>
  );
};

export default index;

const StatsCard: React.FC = () => {

  const data = [
    {id:0,title: "Booked Holidays",count:45,link:'/',icon : <MapPinned  style={{color : webColors['neutral-grey-500']}} /> },
    {id:1,title: "Booked Services",count:45,link:'/',icon :  <MapPinned  style={{color : webColors['neutral-grey-500']}} />},
    {id:2,title: "Total Queries",count:45,link:'/',icon : <MapPinned  style={{color : webColors['neutral-grey-500']}} /> },
    {id:3,title: "Total Reviews",count:45,link:'/',icon : <MapPinned  style={{color : webColors['neutral-grey-500']}} /> },
    {id:4,title: "Total Travelers Added",count:45,link:'/',icon : <MapPinned  style={{color : webColors['neutral-grey-500']}} /> },
  ]
  return (
    <>
     {
      data?.map((val:any,index:number)=>{
        return  <React.Fragment key={index}>
          <Col lg={4} className="my-lg-4 my-3">
        <Card
        icon={val.icon}
        count={val.count}
        link={val.link}
        title={val.title} />
      </Col>
        </React.Fragment>
      })
     }
    </>
  );
};
