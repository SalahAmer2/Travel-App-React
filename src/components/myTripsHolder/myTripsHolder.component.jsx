import React from "react";
import { TripCard } from "../tripCard/tripCard.component";

import { connect } from "react-redux";

import './myTripsHolder.styles.scss';

class MyTripsHolder extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //const tripDataArray = Object.values(this.props.currentProjectData);

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
            // React.createElement('div', { className: 'entryHolder', id: 'tripId' })
        )
    }//NOT WORKING BECAUSE IT'S ASYNCHRONOUS

}

// export const MyTripsHolder = (props) => (
//     <div>
//         {props.children ? 
//         <div className="title centerTitle">My Trips</div>
//         :
//         null
//         }
//         <div id="allEntryHolders">
//             {props.tripDataArray.map(tripData => (
//                 <TripCard key={tripData.id} id={tripData.id} tripData={tripData}/>
//             ))}
//         </div>
//     </div>
// )

const mapStateToProps = state => ({
    currentProjectData: state.inputs.currentProjectData
});

export default connect(mapStateToProps)(MyTripsHolder);