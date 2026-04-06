import React from "react";

export const UncontrolledForm = () => {
    const nameInputRef = React.createRef();
    const ageInputRef = React.createRef();
    
    const submitHandler = (e) => {
        console.log(nameInputRef.current.value);
        console.log(ageInputRef.current.value);
        e.preventDefault();
    }

    return(
        <form onSubmit={submitHandler}>
            <input name="name" type="text" placeHolder="Name" ref={nameInputRef} />
            <input name="age" type="number" placeHolder="Age" ref={ageInputRef} />
            <input type="submit" value="Submit" />
        </form>
    );
};
