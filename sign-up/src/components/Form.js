import React from 'react';

function Form (props){
    const {
        values,
        onInputChange,
        checkBoxChange,
        onSubmit,
        disabled,
        errors
    } = props
    return(
        <form onSubmit={onSubmit}>
            <div>
                <h2>Please Enter Information</h2>
                <button disabled={disabled}>Submit</button>
                <div>
                    <div>{errors.firstName}</div>
                    <div>{errors.lastName}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.termsOfUse}</div>
                </div>
                <div>
                    <label>First Name:&nbsp;
                        <input
                            type='text'
                            name='firstName'
                            value={values.firstName}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>Last Name:&nbsp;
                        <input
                            type='text'
                            name='lastName'
                            value={values.lastName}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>Email:&nbsp;
                        <input
                            type='text'
                            name='email'
                            value={values.email}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>Password:&nbsp;
                        <input
                            type='text'
                            name='password'
                            value={values.password}
                            onChange={onInputChange}
                        />
                    </label>
                    <label>Terms and Conditions
                        <input
                            type='checkbox'
                            name='termsOfUse'
                            checked={values.termsOfUse}
                            onChange={checkBoxChange}
                        />
                    </label>
                </div>
            </div>
        </form>
    )
}

export default Form