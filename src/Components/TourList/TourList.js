import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import { tourData } from '../tourData';
import './TourList.scss';

class TourList extends Component{
    state = {
        tours: tourData
    };
    removeTour = id => {
        const { tours } = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        });
    };
    render(){

        const { tours } = this.state;

        return(
            <div className="container">
                <div className="row">
                    {tours.map(tour=>{
                        return(
                            <Tour 
                                key={tour.id}
                                tour={tour}
                                removeTour={this.removeTour} //just passed the function referance as props
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default TourList;