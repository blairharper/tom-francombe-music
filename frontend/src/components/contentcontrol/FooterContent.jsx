import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

var contact = {
    line1 : '22 Somestreet',
    town  : 'Taunton',
    post  : 'TA1 1AA',
    tel   : '+447777777777',
    email : 'email@address.com'
};

var music = {
    video_1_link : 'http://youtube.com',
    video_1_text : 'Cool gig in Taunton',
    video_2_link : 'http://youtube.com',
    video_2_text : 'Amazing gig in Bristol',
    video_3_link : 'http://youtube.com',
    video_3_text : 'Fab gig in Froome'
};

var social = {
    facebook  : 'https://www.facebook.com/thomas.francombe.7',
    twitter   : 'https://twitter.com/tomfrancombe',
    linkedin  : 'https://uk.linkedin.com/in/tom-francombe-04552399',
    instagram : 'https://www.instagram.com/tfrancombemusic/',
};

class FooterContent extends Component {
    render () {
        return(<div>
            
            <footer className="footer">
                        
            <Grid>
            <Row className="show-grid">
                <Col xs={5} md={4}>    
                <ul className="address">
                    <span>Contact</span>
                    <li>
                        <p>{contact.line1}, {contact.town}, {contact.post}</p>
                    </li>
                    <li>
                        <p>{contact.tel}</p>
                    </li>
                    <li>
                        <p>{contact.email}</p>
                    </li>
                </ul>
                </Col>
                <Col xs={4} md={4}>
                <ul className="music">
                    <span>Music</span>
                    <li>
                        <a target="_blank" href={music.video_1_link}>{music.video_1_text}</a>
                    </li>
                    <li>
                    <a target="_blank" href={music.video_2_link}>{music.video_2_text}</a>
                    </li>
                    <li>
                    <a target="_blank" href={music.video_3_link}>{music.video_3_text}</a>
                    </li>
                </ul>
                </Col>
                <Col xs={3} md={4}>
                <ul className="social">
                    <span>Social</span>
                    <li>
                        <a target="_blank" href={social.facebook}><i className="fa fa-facebook fa-2x"></i></a>
                    </li>
                    
                    <li>
                        <a target="_blank" href={social.twitter}><i className="fa fa-twitter fa-2x"></i></a>
                    </li>
                    
                    <li>
                        <a target="_blank" href={social.linkedin}><i className="fa fa-linkedin fa-2x"></i></a>
                    </li>
                    
                    <li>
                        <a target="_blank" href={social.instagram}><i className="fa fa-instagram fa-2x"></i></a>
                    </li>
                    
                </ul>
                </Col>
            </Row>
            </Grid>

            </footer>
            </div>)
    }
}

export default FooterContent