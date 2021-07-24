import React from 'react';

function Submit(props) {
    
    return (
        <div>
            <form onSubmit = {props.handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Submit;