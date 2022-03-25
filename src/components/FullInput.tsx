import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage:(title:string)=>void
}

export const FullInput = (props:FullInputPropsType) => {

    let [title, setTitle]=useState("")

    const onChangleInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }
    const onClickButtonHandler = () => {
props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <div>
                <input value={title} onChange={onChangleInputHandler} />
                <button onClick={onClickButtonHandler}>+</button>
            </div>
        </div>
    );
};
