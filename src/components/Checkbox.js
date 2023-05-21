import React, { Fragment } from "react";
export default function Checkbox(props) {
    const {
        onChange,
        data: { id, description, done }
    } = props;
    return (
        <Fragment>
            <label style={{display: "flex"}}>
                <input
                    name={id}
                    type="checkbox"
                    defaultChecked={done}
                    onChange={onChange}
                />
                
                <div>{description}</div>
            </label>
        </Fragment>
    );
}