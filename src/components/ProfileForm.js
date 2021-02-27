import React, { useState} from 'react';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {

    const [enteredForm, setEnteredForm] = useState({
        registerForm: {
            fname: {
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
                male: {
                    label: 'Male',
                elementConfig: {
                    className: classes.fillWidth,
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
                        className: classes.fillWidth,
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

    return (
        <section> {/*form section */}
            <form className={classes.formCss}>
                <div className={classes.divStyle}>
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
                </div>
                <div className={classes.inputCss}>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </section>
    );
};

export default ProfileForm;