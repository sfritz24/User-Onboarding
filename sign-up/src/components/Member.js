import React from 'react';

function Members (props){
    const {details} = props

    if(!details){
        return <h3>Fetching Member Details</h3>
    }

    return(
        <div>
            <h3>{details.firstName} {details.lastName}</h3>
            <h4>{details.email}</h4>
        </div>
    )
}

export default Members