import {memo} from "react";

const Second = memo((props) => {
    console.log('SECOND')
    return (
        <>
            <label>First Name</label>
            <input
                type="text"
                name="firstName"
                value={props.firstName}
                onChange={props.handleChange}
            />
            {props.error.firstName.length > 0 && <span>{props.error.firstName}</span>}
            <p></p>
            <label>Last Name</label>
            <input
                type="text"
                name="lastName"
                value={props.lastName}
                onChange={props.handleChange}
            />
            {props.error.lastName.length > 0 && <span>{props.error.lastName}</span>}
        </>
    )
})

export default Second;