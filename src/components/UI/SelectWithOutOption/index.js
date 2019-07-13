import React from 'react';

const SelectWithOutOption = (props) => {
    return (
        <div className="select-without-options"> 
            <span className="placeholder">
                {props.placeHolder || 'انتخاب کنید' }
            </span>
            <div className="icon-placeholder">
                <img src="/icons/ic_dropdown_blue.svg" alt="dropdown icon" />
            </div>
        </div>
    )
}

export default SelectWithOutOption;