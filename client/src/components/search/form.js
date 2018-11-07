import React from 'react';

const Form = props => {
    return (
        <form className='form' onSubmit={props.submit}>
            <label className='label'>{props.inputTextOne}</label>
            <input className='input' value={props.value} onChange={props.onChange} name='alias' placeholder={props.placeholder}></input>
            <label className='label'>{props.inputTextTwo}</label>
            <input className='input' value={props.value} onChange={props.onChange} name='location' placeholder={props.locationHolder}></input>
            <br /><br />
            <input type='submit' value='Find me something!' className='button'></input>
        </form>
    );
}

export default Form;