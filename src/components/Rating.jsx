import { ReactComponent as Icon } from '../images/icon-star.svg';
import { ReactComponent as Image } from '../images/illustration-thank-you.svg'
import { useState } from 'react';

export const Rating = () => {

    const [isSubmitted, setIsSubmitted] = useState(null);
    const [rating, setRating] = useState('');
    const [ratingBtn, setRatingBtn] = useState(undefined);

    const makeActive = (e) => {
        const btn = e.currentTarget;
        const allButtons = Array.from(e.currentTarget.parentNode.children);

        allButtons.forEach((button) => button.classList.remove('active'));
        btn.classList.add('active');
        setRatingBtn(btn);
    };

    const handleSubmit = () => {

        if (ratingBtn === undefined) {
            setIsSubmitted(false);
            return;
        }

        setIsSubmitted(true);
        setRating(ratingBtn.textContent);
    };

    if (isSubmitted) {
        return (
            <div className="thank-you-state-container">
                <Image className="thank-you-img" />
                <p className="selected-rating">You selected <span id='rating'>{rating}</span> out of 5</p>
                <h2>Thank You!</h2>
                <p>We appreciate you taking the time to give a rating. If you ever need more support,
                    don’t hesitate to get in touch!</p>
            </div>
        );
    } else {
        return (
            <div className="rating-state-container">
                <Icon className="icon" />
                <h2>How did we do?</h2>
                <p>Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!</p>
                <div className="btn-container">
                    <button onClick={makeActive}>1</button>
                    <button onClick={makeActive}>2</button>
                    <button onClick={makeActive}>3</button>
                    <button onClick={makeActive}>4</button>
                    <button onClick={makeActive}>5</button>
                </div>
                <button id="submit-btn" type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        );
    }

}
