import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';


class Supplier extends Component {

  constructor(props){
    super(props);

    this.state =
    {
      name: "Australian Solar Co.",
      bid: '$1,000,000.00',
      rating: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      certification: 'Cert IV',
      materials: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      warranty: '10 - 20 years',
      completed: '140',
      type: 'Commercial',
      cost: '$1 - 3m'
    }
  }


  render(){
    return(
      <Container style={{margin:'1rem auto', margin:'5% auto', height:'100%'}}>
        <Row>
          <Col className="leftLighting" lg={4}></Col>
          <Col lg={8} style={{background:'white', borderRadius: '20px'}}>
            <Row style={{paddingLeft:'1rem'}}>
              <h3>{this.state.name}</h3>
            </Row>
            <Row style={{paddingLeft:'1rem'}}>
              <Image src={process.env.PUBLIC_URL +`/yellowStar.png`} style={{width: '20px', height:'20px'}}fluid />
              <Image src={process.env.PUBLIC_URL +`/yellowStar.png`} style={{width: '20px', height:'20px'}}fluid />
              <Image src={process.env.PUBLIC_URL +`/yellowStar.png`} style={{width: '20px', height:'20px'}}fluid />
              <Image src={process.env.PUBLIC_URL +`/yellowStar.png`} style={{width: '20px', height:'20px'}}fluid />
            </Row>
            <Row style={{paddingLeft:'1rem'}}>
              <p>{this.state.description}</p>
            </Row>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Certification and Accreditation: {this.state.certification}
              </ListGroup.Item>
              <ListGroup.Item>
                Materials: {this.state.materials}
              </ListGroup.Item>
              <ListGroup.Item>
                Warranty: {this.state.warranty}
              </ListGroup.Item>
            </ListGroup>
            <div style={{textAlign:'center'}}>
            <Row style={{background:'black', borderRadius:'20px', width:'70%', color:'white', margin: '1rem auto'}}>
              <Col lg={4}>
                <h3> {this.state.completed}</h3>
                <p>Jobs completed</p>
              </Col>
              <Col lg={4}>
                <h3> {this.state.type}</h3>
                <p>Type of Projects</p>
              </Col>
              <Col lg={4}>
                <h3>{this.state.cost}</h3>
                <p>Construction Cost</p>
              </Col>
            </Row>
            </div>
          </Col>
        </Row>
      </Container>

    )
  }
}

export default Supplier;
