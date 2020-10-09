import React from 'react';

const ChangingTextField = ({text}) => {
    return (
        <React.Fragment >
            <div className="changingText--title">
                <h3>{text.header}</h3>
            </div>
            <div className="changingText--desc">
                <p>{text.desc}</p>
            </div>
            <div className="changingText--tech">
                <p>Technology: {text.tech}</p>
            </div>
            <div className="changingText--link">
                <a href={`${text.gh}`}>GitHub</a>
            </div>
        </React.Fragment>
    );
};

export default ChangingTextField;