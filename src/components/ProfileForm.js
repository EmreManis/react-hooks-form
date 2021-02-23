import React from 'react';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {

    return (
        <section> {/*form section */}
            <form className={classes.formCss}>
                <div className={classes.divStyle}>
                    <label>First Name</label>
                    <input className={classes.fillWidth} type="text"/>
                </div>
                <div className={classes.divStyle}>
                    <label>Last Name</label>
                    <input className={classes.fillWidth} type="text"/>
                </div>
                <div className={classes.divStyle}>
                    <label>Email</label>
                    <input className={classes.fillWidth} type="email"/>
                </div>
                <div className={classes.divStyle2}>
                    <label>Sex</label>
                    <input type="radio"/>
                    <label>Male</label>
                    <input type="radio"/>
                    <label>Female</label>
                </div>
                <div className={classes.divStyle}>
                    <label>Notes</label>
                    <textarea className={classes.fillWidth} rows="8"></textarea>
                </div>
                <div className={classes.inputCss}>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </section>
    );
};

export default ProfileForm;