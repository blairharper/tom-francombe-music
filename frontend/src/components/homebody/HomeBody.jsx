import React, { Component } from 'react';
import { Grid, Row, Col, Popover } from 'react-bootstrap';

class HomeBody extends Component {
    render() {
        return (<div>
            <Grid> 
            <Row className="show-grid">
                <Col xs={6} md={4}>    
                <h2>Lorem</h2>
                <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Col>
                <Col xs={6} md={4}>
                <h2>Ipsum</h2>
                <strong>Sed ut perspiciatis unde omnis iste</strong> natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </Col>
                <Col xs={6} md={4}>
                <h2>Dolor</h2>
                <strong>At vero eos et accusamus et iusto odio dignissimos ducimus</strong> qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </Col>
            </Row>
            </Grid>
            <footer className="footer">
                <div className="container">
                <Grid>
                <Row className="show-grid">
                    <Col xs={6} md={4}>    
                    <ul className="address">
                        <span>Contact</span>
                        <li>
                            <p>22 Somestreet, somewhere, TA1 1AA</p>
                        </li>
                        <li>
                            <p>+447891234567</p>
                        </li>
                        <li>
                            <p>email@address.com</p>
                        </li>
                    </ul>
                    </Col>
                    <Col xs={6} md={4}>
                    <ul className="music">
                        <span>Music</span>
                        <li>
                            <a href="#">Video 2</a>
                        </li>
                        <li>
                        <a href="#">Video 3</a>
                        </li>
                        <li>
                        <a href="#">Video 4</a>
                        </li>
                    </ul>
                    </Col>
                    <Col xs={6} md={4}>
                    <ul className="social">
                        <span>Social</span>
                        <li>
                            <a href="#"><i class="fa fa-facebook fa-2x"></i></a>
                        </li>
                        
                        <li>
                            <a href="#"><i class="fa fa-twitter fa-2x"></i></a>
                        </li>
                        
                        <li>
                            <a href="#"><i class="fa fa-linkedin fa-2x"></i></a>
                        </li>
                        
                        <li>
                            <a href="#"><i class="fa fa-tumblr fa-2x"></i></a>
                        </li>
                        
                        <li>
                            <a href="#"><i class="fa fa-google-plus fa-2x"></i></a>
                        </li> 
                    </ul>
                    </Col>
                </Row>
                </Grid>
            </div>
            </footer>
        </div> )
    }
}

export default HomeBody

