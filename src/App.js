import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Alert,Button , Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  state= {
    vote : false
  }
  onVote = () =>{
    this.setState({ vote: true})
  }
  render() {
    const { vote } = this.state
    // if(vote){
    //   return(
    //     <Container>
    //       <Row>
    //       <Col>
    //       <Alert color="success">
    //         THANK YOU FOR YOUR VOTE
    //       </Alert>
    //       </Col>
    //     </Row>
    //     </Container>
    //   )
    // }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">THE MARK SINGER</h1>
        </header>
        <p className="App-intro">
        <Container>
        <Row>
          <Col xs="6"><img width = "400px" src ="https://i.pinimg.com/736x/a5/9a/45/a59a4577d29d2c8d41a414f6ee6eb911.jpg"/></Col>
          <Col xs="6"><img width = "400px" src ="https://i.pinimg.com/736x/1f/76/10/1f76108ea372a4f7ce2288a64d7284a6.jpg"/></Col>
        </Row>


        <Row>
          {
             vote ? null : <Col xs="6"><Button  color="info" onClick= {this.onVote} >VOTE</Button>{' '}</Col>
          }
          {
            vote ? null : <Col xs="6"><Button  color="info" onClick= {this.onVote} >VOTE</Button>{' '}</Col>
          }
        </Row>
        <Row>
          <Col>
        {
          vote ?  (<Alert color="success">
           THANK YOU FOR YOUR VOTE
         </Alert>) : null
        }
          </Col>
        </Row>
        </Container>
        </p>
      </div>
    );
  }
}

export default App;
