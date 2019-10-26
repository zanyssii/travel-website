import React, { Component } from 'react';

class TravelPlanner extends Component {
    state = {
        travelBudget: '',
        travelDestination: '',
        travelHotel: ''
    }

    setTravelDestination = e => {
        this.setState({ 
            travelDestination: e.target.value 
        });
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        type='text'
                        value={this.state.travelBudget}
                        onChange={e => this.setState({ travelBudget: e.target.value })}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        value={this.state.travelDestination}
                        onChange={this.setTravelDestination}
                    />
                </div>


                {/* find hotels */}
            </div>
        );
    }
}

export default TravelPlanner;