import {memo} from "react";

const First = memo((props) => {
    console.log('FIRST')
    return (
        <>
            <label>E-mail</label>
            <input
                type="text"
                name="email"
                value={props.email}
                onChange={props.handleChange}
            />
            {props.error.email.length > 0 && <span>{props.error.email}</span>}
            <p></p>
            <label>Password</label>
            <input
                type="password"
                name="password"
                value={props.password}
                onChange={props.handleChange}
            />
            {props.error.password.length > 0 && <span>{props.error.password}</span>}
        </>
    )
})

export default First;