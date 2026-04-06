import React, { useState } from "react";

export const UncontrolledFlow = ({children, onDone}) => {
    const [data, setData] = useState({});
    const [currentStepIndex, setCurrentStepindex] = useState(0);

    const goNext = ( dataFromStep ) => {
        const nextStepIndex = currentStepIndex + 1;
        const newData = {
            ...data,
            ...dataFromStep,
        }

        console.log('newData:', newData);
        console.log('children.len:', children.length);

        if(nextStepIndex < children.length){
            setCurrentStepindex(nextStepIndex);
        }else{
            onDone(newData);
        }

        setData(newData);
    }

    const currentChild = React.Children.toArray(children)[currentStepIndex];

    if(React.isValidElement(currentChild)){
        return React.cloneElement(currentChild, { goNext });
    }

    return currentChild;
};
