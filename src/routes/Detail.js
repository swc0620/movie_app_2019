import React from "react";

// If someone tries to enter 'movie-detail' manually, we redirect him to 'home'
// react-router sends 'route props' by default
class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    
    render() {
        const {location} = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
        
    }
}
export default Detail;