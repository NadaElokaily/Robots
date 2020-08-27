import React, { Component } from 'react';


class Card extends Component {
    render() {
        const { id,name,username,email } = this.props
        return (
            <div className="tc bg-light-green br3 dib pa3 ma2 grow">
                <img src={`https://robohash.org/${id}/200x200`} alt={ name } />
                <h2>{ name }</h2>
                <h3>{ username }</h3>
                <p>{ email }</p>
            </div>
        )
    }
}

export default Card