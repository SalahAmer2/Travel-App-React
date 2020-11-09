import React from "react";
import { TripCard } from "../tripCard/tripCard.component";

import { connect } from "react-redux";

import './myTripsHolder.styles.scss';

class MyTripsHolder extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.children ?
                    <div className="title centerTitle">My Trips</div>
                    :
                    null
                }
                <div id="allEntryHolders">
                    {
                        this.props.currentProjectData ?
                            (Object.values(this.props.currentProjectData.dataOfTripCard).map(tripDataIDKey => (
                                this.props.currentProjectData.dataOfTripCard[tripDataIDKey].map(tripData => (
                                    <TripCard key={tripData.id} id={tripData.id} tripData={tripData} />,
                                    <p>{tripData + ""}</p>
                                )) 
                            )))
                        : null
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentProjectData: state.inputs.currentProjectData
});

export default connect(mapStateToProps)(MyTripsHolder);