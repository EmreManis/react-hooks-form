import React, { useState} from 'react';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {

    const [enteredForm, setEnteredForm] = useState({
        registerForm: {
            fname: {
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
            },
            lname: {
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
            },
            email: {
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
            },
            gender: {
                divClass: 'classes.divStyle2',
                male: {
                    label: 'Male',
                elementConfig: {
                    className: "classes.fillWidth",
                    type: 'radio',
                    name: 'gender'
                },
                value: '',
                validation: {
                    required: true
                    }
                },
                female: {
                        label: 'Female',
                    elementConfig: {
                        className: "classes.fillWidth",
                        type: 'radio',
                        name: 'gender'
                    },
                    value: '',
                    validation: {
                        required: true
                    }               
                }
            },
            notes: {
                divClass: classes.divStyle,
                label: 'Notes',
                elementConfig: {
                    className: classes.fillWidth,
                    rows: 8,
                    placeholder: 'Write a note'
                },
                value: '',
                validation: {
                    required: false
                }
            }
        }
    });

    const formElementsArray = [];
    // for (let key in enteredForm.registerForm) {
    //     formElementsArray.push({
    //         ...enteredForm.registerForm[key],
    //             elementConfig: { ...enteredForm.registerForm[key].elementConfig }
    //     });
    // }

    for (let key in enteredForm.registerForm) {
        for(let key in enteredForm.registerForm[key]) {
            formElementsArray.push({
            ...enteredForm.registerForm[key],
                elementConfig: { ...enteredForm.registerForm[key].elementConfig }
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
                                 //required={formElement.config.validation.required}
                            />
                        </div>
                    ))
                }
                {/* <div className={classes.divStyle}>
                    <label>First Name</label>
                    <input 
                        className={classes.fillWidth} 
                        type="text" 
                        placeholder="Homer" 
                        required
                    />
                </div>
                <div className={classes.divStyle}>
                    <label>Last Name</label>
                    <input 
                        className={classes.fillWidth} 
                        type="text" 
                        placeholder="Simpson" 
                        required
                    />
                </div>
                <div className={classes.divStyle}>
                    <label>Email</label>
                    <input 
                        className={classes.fillWidth} 
                        type="email" 
                        placeholder="test@test.com" 
                        required
                    />
                </div>
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
                </div> */}
                <div className={classes.inputCss}>
                    <input type="submit" value="Submit"/>
                </div> 
            </form>
        </section>
    );
};

export default ProfileForm;