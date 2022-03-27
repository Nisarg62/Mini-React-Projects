import React, {useState} from 'react'
import reviews from './Data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


function Reviews() {
    const [review, setReview] = useState(reviews[0])

    const buttonHandler = (button) =>{
        if(button === 'prevButton' && review.id !== 1){
            setReview(reviews[review.id - 2])
        }
        else if(button === 'prevButton'){
            setReview(reviews[reviews.length - 1])
        }
        else if(button === 'nextButton' && review.id !== 4 ){
            setReview(reviews[review.id])
        }
        else if(button === 'nextButton'){
            setReview(reviews[0])
        }
    }

    const surpriseHandler = () =>{
        const random = Math.floor(Math.random() * reviews.length)
        if(random < reviews.length && random != (review.id - 1))
            setReview(reviews[random])
        else{
            if(random == 0)
                setReview(reviews[random + 1])
            else if(random == reviews.length - 1)
                setReview(reviews[random - 1])
        }
    }

  return (
    <div>
        <section className='container'>
                    <div className='review-container'>
                        <div className='image-container'>
                        <img className='image' src={review.image} />
                        <span className='quote-icon'>
                            <FaQuoteRight />
                        </span>
                    </div>
                    <h4 className='author'>{review.name}</h4>
                    <p className='job'>{review.job}</p>
                    <p className='info'>{review.text}</p>
                    <span className='chevron-icon'>
                        <FaChevronLeft onClick={() => buttonHandler('prevButton')}/>
                        <FaChevronRight onClick={() => buttonHandler('nextButton')} />
                    </span>
                    <button className='surprise-me' onClick={() => surpriseHandler()}>Surprise Me</button>
                </div>
        </section>
    </div>
  )
}

export default Reviews