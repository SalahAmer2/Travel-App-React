import React from 'react';

import './button.styles.scss'

class Button extends React.Component {

    constructor(props) {
        super(props);
    }
    //this error seems to be a react error, not specifically a redux error

    handleClick = () => {
        this.props.onDelete(this.props.id);
        // onDelete();
        // props.onDelete(props.id); // here just onDelete(props.id);
    }

    render() {
        return (
            <div>
                <button className='deleteXbtn'
                    onClick={this.handleClick}
                > X </button>
            </div>
        )
    }
}

export default Button;

// import React from 'react';

// import './button.styles.scss'

// export const Button = ({onDelete, id}) => { 
    
//     const handleClick = () => {
//         onDelete(id);
//         // onDelete();
//         // props.onDelete(props.id); // here just onDelete(props.id);
//     }
    
//     return (
//         <div>
//             <button className='deleteXbtn'
//                 onClick={handleClick}
//             > X </button>
//         </div>
//     )
// }

// import React from 'react';

// import { connect } from "react-redux";

// import { currentProjectData } from "../../../../redux/projectData/projectData.actions";

// import './button.styles.scss'

// class Button extends React.Component {

//     deleteTrip = (id) => {
//         this.props.currentProjectData_Action(
//             this.props.currentProjectData.filter((tripDataItem, index) => {
//                 return index !== id;
//             })
//         )
//     };

//     render() {
//         return (
//             <div>
//                 <button className='deleteXbtn' 
//                 onClick={this.deleteTrip(this.props.id)}
//                 > X </button>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     currentProjectData: state.projectData.currentProjectData
// });

// const mapDispatchToProps = dispatch => ({
//     currentProjectData_Action: projectData => dispatch(currentProjectData(projectData))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Button);