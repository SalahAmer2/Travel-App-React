import React from 'react';

import './button.styles.scss'

class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.deleteTripTrueOrFalse()
        this.props.onDelete(this.props.trip_id);
    }

    render() {
        return (
            <div>
                <button className='deleteXbtn'
                    onClick={ this.handleClick }
                > X </button>
            </div>
        )
    }
}

export default Button;