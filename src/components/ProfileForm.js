import React, { useState, useCallback } from 'react';
import axios from 'axios';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[gender, setGender] = useState('');
    const[notes, setNotes] = useState('');

    const[formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        notes: ''
    });

    const submitHandler = () => {
        setFormData({
            firstName: firstName,
            lastName: lastName,
            email: email,
            gender: gender,
            notes: notes
        });

        const sendData = {
            firstName: 'test',
            lastName: 'test',
            email: 'test@test.com',
            gender: 'Male',
            notes: 'notenote'
        };

            axios.post('https://formexample-cc49f-default-rtdb.firebaseio.com/form.json', sendData)
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }
  
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
                    onChange={event =>{
                        setFirstName(event.target.value)
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
                        setLastName(event.target.value)
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
                        setEmail(event.target.value)
                    }}
                />
            </div>
            <div className={classes.divStyle2}>
                <label>Sex</label>
                <input 
                    type="radio" 
                    name="gender" 
                    required
                    onChange={event =>{
                        setGender('Male')
                    }}
                />
                <label>Male</label>
                <input 
                    type="radio" 
                    name="gender"
                    onChange={event =>{
                        setGender('Female')
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
                        setNotes(event.target.value)
                    }}
                >
                </textarea>
            </div>
            <div className={classes.inputCss}>
                <input type="submit" value="Submit" onClick={submitHandler}/>
            </div>
        </form>
    </section>
    );
};

export default ProfileForm;