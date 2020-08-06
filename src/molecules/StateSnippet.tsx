import React from 'react';

type CardProps = {
    title: string,
    state: string,
    highlight: string
}

const StateSnippet = ({title, state, highlight}: CardProps) => {
    return <div className="card bg-light mb-3 text-center">
        <div className="card-header">{title}</div>
        <div className="card-body">
            <h5 className="card-title">{state}</h5>
            <h6 className="card-title text-primary">{highlight}</h6>
        </div>
    </div>
}

export default StateSnippet;