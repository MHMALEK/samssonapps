import React from 'react';

const Accordion = (props) => {
    const {title, children } = props;
    return (
        <div className="accordion">
            {
                title && 
                <div className="accordion-title">
                    {title}
                </div>
            }
            {children && <div className="accordion-content">
                {children}
            </div>}
        </div>
    )
}

export default Accordion;