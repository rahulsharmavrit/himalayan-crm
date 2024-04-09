import { Accordion, Container, Row } from "react-bootstrap"
import { sidebar_menu } from "./config"
import { NavLink } from "react-router-dom"
import { webColors } from "../../assets/constant"

const index = () => {
  return (<>

  <Container>
    <Row>
        {
            sidebar_menu?.map((item:any , index:any ) =>{
                return(<>
                {
                  item?.submenu?.length > 0 ?

                <Accordion flush key={index}>
                  <Accordion.Item eventKey="0" >
        <Accordion.Header>{item.icon}{item.name}</Accordion.Header>
        <Accordion.Body>
                  <ul>
                    { 
                    item.submenu.map((sval:any,sindex:number) => {
                        return  <NavLink to={sval.path}  key={sindex} className={'text-decoration-none sidebar-navlink'}><li className="font-14-600 cursor-pointer mb-2 text-black">{sval.name}</li></NavLink>
                      })
                    }
                  </ul>
        </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                : 
                <NavLink to={item.path} className={'text-decoration-none sidebar-navlink parent-sidebar-navlink'}><li className="mb-2" style={{padding : `10px 16px`}} key={index}  >{item.icon}{item.name}</li></NavLink>
                            }
                </>)
            })
        }
    </Row>
  </Container>

  
  </>)
}

export default index