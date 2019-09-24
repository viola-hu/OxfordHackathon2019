import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';



class Item extends Component {

  constructor(props){
    super(props);

    this.state = {
      documents:['Floorplan', 'Blueprint'],
      team:[{
        name: 'Jane',
        job: 'Architect',
        image: 'https://2atstartup.com.au/wp-content/uploads/2019/05/girl-avatar.png'
      },{
        name: 'Derek',
        job: 'Electrician',
        image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg'
      },{
        name: 'Jim',
        job: 'Project Manager',
        image: 'https://imgur.com/I80W1Q0.png'
      }],
      bidders: [
        {
          name: "Australian Solar Co.",
          bid: '$1,000,000.00',
          rating: 4
        } ,
        {
          name: "Summer of Solar Inc.",
          bid: '$2,000,000.00',
          rating: 2
        },
        { name: "Solar Boy Pty Ltd",
          bid: '$1,500,000.00',
          rating: 5
        },
        { name: "XYZ Solar",
          bid: '$870,000.00',
          rating: 3
        },
        { name: "Simon's Solar Pty Ltd",
          bid: '$650,000.00',
          rating: 1
        },
        { name: "Awesome Solar Company",
          bid: '$1,000,000.00',
          rating: 1
        }
      ]
    }
  }


  render(){
    let averageBid = (1000000.00 + 2000000.00 + 1500000.00 + 870000.00 + 650000.00 + 1000000.00) / 6;
    let yellowStars = new Array(5).fill(process.env.PUBLIC_URL +`/Vector3.png`);

    return(
      <Container>
        <Row>
          <Col lg={4}>
            <Row style={{margin: '.5rem .5rem .5rem 0'}}>
            <Link to={`/home}`}>
              <Image style={{maxWidth:'20px'}} src={process.env.PUBLIC_URL +`/Vector3.png`}/> {' '}
              George Street Project
            </Link>
            </Row>
            <Row>
            <Figure>
              <Figure.Image
                style={{maxWidth: '100%', borderRadius: '20px'}}
                alt="171x180"
                src="https://www.screed.com.sg/wp-content/uploads/2018/07/IDETTA-Slice-of-Cake-Slim-Ceiling-Lamp.jpg"
              />
            <Figure.Caption>
                <ListGroup variant="flush" >
                  <ListGroup.Item>
                    <h5 style={{color:'black'}}>DUO Surface Flushmount</h5>
                    <p style={{color:'black'}}>Budget $600</p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                    <Col lg={7}>
                    Item type: Light fixture
                    </Col>
                    <Col lg={5}>
                    Remove | Edit
                    </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                    <Col lg={7}>
                    Market value: $600
                    </Col>
                    <Col lg={5}>
                    Remove | Edit
                    </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                    <Col lg={7}>
                    Material: Lorem ipsum
                    </Col>
                    <Col lg={5}>
                    Remove | Edit
                    </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                    <Col lg={7}>
                    Deadline: February 2020
                    </Col>
                    <Col lg={5}>
                    Remove | Edit
                    </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Figure.Caption>
            </Figure>
            </Row>
          </Col>
          <Col lg={3} style={{margin:'1rem'}}>
            <Row style={{background:'white', borderRadius:"20px", margin:'1rem auto'}}>
              <h3>Documents</h3>
              <ListGroup variant="flush">
                  {
                    this.state.documents.map( doc => (
                      <ListGroup.Item>
                      <Row>
                        <Col lg={4}>
                        {doc}
                        </Col>
                        <Col lg={8}>
                        <Link to="/remove">Remove</Link> | <Link to="/download">Download</Link>
                        </Col>
                      </Row>
                      </ListGroup.Item>

                    ))
                  }
                <ListGroup.Item>
                  <Link to='/upload-image'>
                  <Image style={{maxWidth:'20px'}} src={process.env.PUBLIC_URL +`/Upload.png`}/> {' '}
                  Upload Documents
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Row>
            <Row style={{background:'white', borderRadius:"20px"}}>
              <h3>Team</h3>
              <Row>
              {
                this.state.team.map( member => (
                  <Col lg={3}>
                    <Image style={{maxWidth:'50px'}} src={member.image} roundedCircle />
                    <p>{member.name}</p>
                    <p>{member.job}</p>
                  </Col>
                ))
              }
              </Row>
              <Link to='/add-team-members'>
                <Image style={{maxWidth:'20px'}} src={process.env.PUBLIC_URL +`/Add.png`}/> {' '}
                Add team members
              </Link>

            </Row>
          </Col>

          <Col lg={4} style={{background:'black', color:'white', borderRadius:"20px", margin:'1rem auto'}}>
            <h3>Bids</h3>
            <Row style={{textAlign: 'center', padding:'1rem', borderRadius:'20px'}}>
              <Col style={{background:'turquoise', color:'white'}}>
                <Image style={{maxWidth:'70%'}} src={process.env.PUBLIC_URL +`/bestBid.png`}/>
                <h3>$870,000</h3>
                <h5>Best Offer</h5>
              </Col>
              <Col style={{background:'grey', color:'white'}}>
                <Image style={{maxWidth:'70%'}} src={process.env.PUBLIC_URL +`/averageBid.png`}/>
                <h3>$1,170,000</h3>
                <h5>Average Bid</h5>
              </Col>
            </Row>
            <Row>
              {
                this.state.bidders.map( b => (
                  <ListGroup variant="flush" style={{width:'100%' }}>
                    <ListGroup.Item style={{background:'black', color:'white'}}>
                      <Row >
                      <Col lg={8}>
                        <Link to={'/supplier'}>
                        {b.name}
                        </Link>
                      </Col>
                      <Col lg={4}>
                        {b.bid}
                      </Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                ))
              }
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Item;
