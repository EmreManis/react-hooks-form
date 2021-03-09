import React, { useState, useCallback } from 'react';
import axios from 'axios';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {

    const[formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        notes: ''
    });

    const submitHandler = event => {
            event.preventDefault();
            axios.post('https://formexample-cc49f-default-rtdb.firebaseio.com/form.json', formData)
            .then(res => console.log(res))
            .catch(error => console.log(error));     
    }
  
    return (
        <section> {/*form section */}
        <form className={classes.formCss} onSubmit={submitHandler}>
            <div className={classes.divStyle}>
                <label>First Name</label>
                <input 
                    className={classes.fillWidth} 
                    type="text" 
                    placeholder="Homer" 
                    required
                    onChange={event =>{
                        setFormData({...formData, firstName: event.target.value})
                    }}
                />
            </div>
            <div className={classes.divStyle}>
                <label>Last Name</label>
                <input 
                    className={classes.fillWidth} 
                    type="text" 
                    placeholder="Simpson" 
                    required
                    onChange={event =>{
                        setFormData({...formData, lastName:event.target.value})
                    }}
                />
            </div>
            <div className={classes.divStyle}>
                <label>Email</label>
                <input 
                    className={classes.fillWidth} 
                    type="email" 
                    placeholder="test@test.com" 
                    required
                    onChange={event =>{
                        setFormData({...formData, email:event.target.value})
                    }}
                />
            </div>
            <div className={classes.divStyle2}>
                <label>Sex</label>
                <input 
                    type="radio" 
                    name="gender" 
                    onChange={event =>{
                        setFormData({...formData, gender:'Male'})
                    }}
                    required
                />
                <label>Male</label>
                <input 
                    type="radio" 
                    name="gender"
                    onChange={event =>{
                        setFormData({...formData, gender:'Female'})
                    }}
                />
                <label>Female</label>
            </div>
            <div className={classes.divStyle}>
                <label>Notes</label>
                <textarea 
                    className={classes.fillWidth} 
                    rows="8" 
                    placeholder="Write a note"
                    onChange={event =>{
                        setFormData({...formData, notes:event.target.value})
                    }}
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