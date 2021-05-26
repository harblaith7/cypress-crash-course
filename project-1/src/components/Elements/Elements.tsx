import React from 'react'
import "./Elements.css"

function Elements() {
    return (
        <div className="Elements">
            <div className="Elements__heading-container">
                <h2 className="Elements-header">Elements</h2>
            </div>
            <div className="Elements-cards-container">

                <h3 className="Elements-subheader">Get</h3>
                <button className="Elements-btn">Button</button>
                <button className="Elements-btn btn-with-class">Button With Class</button>
                <button className="Elements-btn btn-with-class more-btn-classes">Button With Many Class</button>
                <button className="Elements-btn" id="btn-with-id">Button With Id</button>
                <button className="Elements-btn" type="submit">Button With Type Submit</button>
                <button className="Elements-btn" data-cy="btn-id-1">Button With Data Test Id</button>

                <h3 className="Elements-subheader">Contains</h3>
                <button className="Elements-btn">Unique Text</button>
                <button className="Elements-btn">Not Unique Text</button>
                <button className="Elements-btn" type="submit">Not Unique Text</button>
                <span>
                    <button className="Elements-btn">Not Unique Text</button>
                </span>
                <form style={{float: "left"}}>
                    <button className="Elements-btn">Not Unique Text</button>
                </form>
                <button className="Elements-btn">Just Another Button</button>

                <h3 className="Elements-subheader">Find</h3>
                <form style={{float: "left"}} id="form-1">
                    <button className="Elements-btn btn-1">Button in Form</button>
                    <button className="Elements-btn btn-2">Button in Form</button>
                </form>
            </div>
        </div>
    )
}

export default Elements
