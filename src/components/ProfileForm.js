import React from 'react';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {

    return (
        <section> {/*form section */}
            <form className={classes.formCss}>
                <div>
                    <label>First Name</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email"/>
                </div>
                <div>
                    <label>Sex</label>
                    <input type="radio"/>
                    <label>Male</label>
                    <input type="radio"/>
                    <label>Female</label>
                </div>
                <div>
                    <label>Notes</label>
                    <textarea rows="3" cols="50"></textarea>
                </div>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </section>
    );
};

export default ProfileForm;