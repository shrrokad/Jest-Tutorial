import React from 'react';

type GreetProps = {
    name?: string;
}

export const Greet = (props: GreetProps) => {
    return (
        <>
            <h1>greet {props.name ? props.name : "Guest"}</h1>
        </>
    )
}

export default Greet;