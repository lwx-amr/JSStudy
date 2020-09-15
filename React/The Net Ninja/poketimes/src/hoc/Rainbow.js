import React from "react";

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];
    const className = colors[Math.floor(Math.random() * 5)] + '-text';
    return(props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow;