import { Accordion, Col, Row } from "react-bootstrap";
import { sidebar_menu } from "./config";
import { NavLink } from "react-router-dom";
import { webColors, webLogo } from "../../assets/constant";
import React from "react";
import { ChevronRight } from "lucide-react";

const index = () => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <div
            className="logo-box d-flex justify-content-center align-items-center"
            style={{ height: 80 }}
          >
            <img
              src={webLogo}
              alt="web-logo"
              className="img-fluid user-select-none"
            />
          </div>
        </Col>
        <Col xs={12} className="sidebarMenuOptionContainer">
          {sidebar_menu?.map((item: any, index: any) => {
            return (
              <React.Fragment key={index}>
                {item?.submenu?.length > 0 ? (
                  <Accordion flush className="mb-2">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                      <span className="me-1 my-auto">{item.icon}</span>
                      <span className="my-auto">   {item.name}</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul className="list-unstyled">
                          {item.submenu.map((sval: any, sindex: number) => {
                            return (<React.Fragment>
                              <div className="d-flex align-items-center mb-3">
                              <NavLink
                                to={sval.path}
                                key={sindex}
                                className={
                                  "text-decoration-none sidebar-sub-navlink"
                                }
                              >
                                <li className="font-14-600 cursor-pointer my-auto" style={{color : webColors['text'] }}>
                                <ChevronRight size={16} className="my-auto" />  {sval.name}
                                </li>
                              </NavLink>
                              </div>
                            </React.Fragment>
                              
                            );
                          })}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ) : (
                  <NavLink
                    to={item.path}
                    className={"text-decoration-none parent-sidebar-navlink"}
                  >
                    <div className="mb-2 sidebar-navlink ">
                      <span className="me-1 my-auto">{item.icon}</span>
                      <span className="my-auto">   {item.name}</span>
                    </div>
                  </NavLink>
                )}
              </React.Fragment>
            );
          })}
        </Col>
      </Row>
    </>
  );
};

export default index;
