import React, { useState} from 'react';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {

    const [enteredForm, setEnteredForm] = useState({
        registerForm: {
            fname: {
                firstName: {
                    divClass: classes.divStyle,
                label: 'First Name',
                elementConfig: {
                    className: classes.fillWidth,
                    type: 'text',
                    placeholder: 'Homer'
                },
                value: '',
                validation: {
                    required: true
                }
                }
            },
            lname: {
                lastName: {
                    divClass: classes.divStyle,
                label: 'Last Name',
                elementConfig: {
                    className: classes.fillWidth,
                    type: 'text',
                    placeholder: 'Simpson'
                },
                value: '',
                validation: {
                    required: true
                }
                }
            },
            email: {
                eMail: {
                    divClass: classes.divStyle,
                    label: 'Email',
                    elementConfig: {
                        className: classes.fillWidth,
                        type: 'email',
                        placeholder: 'test@test.com'
                    },
                    value: '',
                    validation: {
                        required: true
                    }
                }
            }
        }
    });

    const formElementsArray = [];
    for (let key in enteredForm.registerForm) {
        for(let props in enteredForm.registerForm[key]) {
            formElementsArray.push({
            ...enteredForm.registerForm[key][props],
            ...enteredForm.registerForm[key][props].validation,
                elementConfig: { ...enteredForm.registerForm[key][props].elementConfig }
        });
        }
    }

    console.log(formElementsArray);
  
    return (
        <section> {/*form section */}
            <form className={classes.formCss}>
                {
                     formElementsArray.map(formElement => (
                        <div className={formElement.divClass}>
                            <label>{formElement.label}</label>
                            <input
                                className={formElement.elementConfig.className}
                                type={formElement.elementConfig.type}
                                placeholder={formElement.elementConfig.placeholder} 
                                required={formElement.validation.required}
                            />
                        </div>
                    ))
                }
                <div className={classes.divStyle2}>
                    <label>Sex</label>
                    <input 
                        type="radio" 
                        name="gender" 
                        required
                    />
                    <label>Male</label>
                    <input 
                        type="radio" 
                        name="gender"
                    />
                    <label>Female</label>
                </div>
                <div className={classes.divStyle}>
                    <label>Notes</label>
                    <textarea 
                        className={classes.fillWidth} 
                        rows="8" 
                        placeholder="Write a note"
                    >
                    </textarea>
                </div> 
                <div className={classes.inputCss}>
                    <input type="submit" value="Submit"/>
                </div> 
            </form>
        </section>
    );
};

export default ProfileForm;