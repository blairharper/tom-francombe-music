import React, { Component } from 'react';
import FooterContent from './FooterContent';
import HomeContent from './HomeContent';
import TutoringContent from './TutoringContent';
import EventsContent from './EventsContent';
import ContactContent from './ContactContent';
import BlogContent from './BlogContent';

class ContentControl extends Component {
    showPage() {
        switch (this.props.currentPage) {
            case "home":
                return <HomeContent />;
            case "FirstNav":
                return <TutoringContent />;
            case "SecondNav":
                return <EventsContent />;
            case "ThirdNav":
                return <ContactContent />;
            case "FourthNav":
                return <BlogContent />;
        }
    }

    render() {
        return (<div>
        {this.showPage()}
        <FooterContent />          
        </div> )
    }
}

export default ContentControl