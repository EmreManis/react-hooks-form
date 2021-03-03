import React, { useState} from 'react';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  
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