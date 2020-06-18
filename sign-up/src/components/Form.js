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
                    <div id='firstNameError'>{errors.firstName}</div>
                    <div id='lastNameError'>{errors.lastName}</div>
                    <div id='emailError'>{errors.email}</div>
                    <div id='passwordError'>{errors.password}</div>
                    <div id='termsOfUseError'>{errors.termsOfUse}</div>
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