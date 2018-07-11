import React, { Component } from 'react';
import FooterContent from './FooterContent';
import HomeContent from './HomeContent';
import TutoringContent from './TutoringContent';
import EventsContent from './EventsContent';
import ContactContent from './ContactContent';
import BlogContent from './BlogContent';
import RegistrationContent from './registration/RegistrationContent';
import LoginContent from './LoginContent';


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
            case "Registration":
               return <RegistrationContent />;
            case "Login":
                return <LoginContent />;
            
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