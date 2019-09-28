import React, { Component } from 'react';
import './Tour.scss';

class Tour extends Component{

    state = {
        showInfo: false
    };

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    };

    render(){

        const {id,city,name,img,info} = this.props.tour;
        const {removeTour} = this.props;

        return(
            <div className="col-md-4">
                <div className="tour-img-text">
                    <div className="tour-img">
                        <img src={img} alt="" className="img-fluid rounded"/>
                        <div className="close-btn">
                            <i 
                                className="far fa-times-circle"
                                onClick={()=>removeTour(id)}
                            ></i>
                        </div>
                    </div>
                    <div className="tour-text">
                        <h3>{city}</h3>
                        <h5>{name}</h5>
                        <p>Info</p>
                        <span 
                            className="short-down"
                            onClick={this.handleInfo}
                        >
                            <i className="fas fa-caret-square-down"></i>
                        </span>
                        {this.state.showInfo && <p>{info}</p>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Tour;