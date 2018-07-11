import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import MainCarousel from '../../components/carousel/MainCarousel';

var content = {
    col1_heading : "About Tom",
    col1_text    : "Lorem ipsum dolor sit amet " 
                    +"consectetur adipiscing elit, sed do eiusmod tempor incididunt "
                    +"ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "
                    +"nostrud exercitation ullamco laboris nisi ut aliquip ex ea "
                    +"commodo consequat. Duis aute irure dolor in reprehenderit in " 
                    +"voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                    +"Excepteur sint occaecat cupidatat non proident, "
                    +"sunt in culpa qui officia deserunt mollit anim id est laborum.",
    col2_heading : "Tom's experience",
    col2_text    : "Lorem ipsum dolor sit amet " 
                    +"consectetur adipiscing elit, sed do eiusmod tempor incididunt "
                    +"ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "
                    +"nostrud exercitation ullamco laboris nisi ut aliquip ex ea "
                    +"commodo consequat. Duis aute irure dolor in reprehenderit in " 
                    +"voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                    +"Excepteur sint occaecat cupidatat non proident, "
                    +"sunt in culpa qui officia deserunt mollit anim id est laborum.",
    col3_heading : "Tutoring service",
    col3_text    : "Lorem ipsum dolor sit amet " 
                    +"consectetur adipiscing elit, sed do eiusmod tempor incididunt "
                    +"ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "
                    +"nostrud exercitation ullamco laboris nisi ut aliquip ex ea "
                    +"commodo consequat. Duis aute irure dolor in reprehenderit in " 
                    +"voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                    +"Excepteur sint occaecat cupidatat non proident, "
                    +"sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

class HomeContent extends Component {
    render() {
        return (<div>
            <MainCarousel />
            <div className="home-content-container">
                <Grid> 
                <Row className="show-grid">
                    <Col xs={4.2} md={4}>    
                    <h2>{content.col1_heading}</h2>
                    <p>{content.col1_text}</p>
                    </Col>
                    <Col xs={4.2} md={4}>
                    <h2>{content.col2_heading}</h2>
                    <p>{content.col2_text}</p>
                    </Col>
                    <Col xs={4.2} md={4}>
                    <h2>{content.col3_heading}</h2>
                    <p>{content.col3_text}</p>
                    </Col>
                </Row>
                </Grid>
            </div>
        </div> )
    }
}

export default HomeContent

