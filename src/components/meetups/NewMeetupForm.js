import {useRef} from 'react';

import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card'

const NewMeetupForm = (props) => {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        return props.onAddMeetup(meetupData);
    }
    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input ref={titleInputRef} type='text' required id='title'></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input ref={imageInputRef} type='url' required id='image'></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input ref={addressInputRef} type='text' required id='address'></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='descriprion'>Description</label>
                <textarea ref={descriptionInputRef} required id='descriprion' rows='5'/>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
};

export default NewMeetupForm;