import React from 'react'
import './FormValidate.css'

function Cards({ cardNumber, cardHolder, expiryMonth, expiryYear, cvc }) {
    return (
        <>
            <div className='Card-container'>

                <div className='ellipse'></div>
                <div className='ellipse2'></div>
                <div className='ellipse3'></div>
                <div className='ellipse4'></div>
                <div className='ellipse5'></div>
                <div className='ellipse6'></div>


                <div className='circle'></div>
                <div className='oval'></div>


                <div className='card-num'>
                    <p className='num'>{cardNumber}</p>

                </div>


                <div className='holdername'>
                    <p className='template-name'>{cardHolder}</p>
                </div>


                <div className='expdate'>
                    <p className='mm'>{expiryMonth}</p>
                    <p className='line'>/</p>
                    <p className='yy'>{expiryYear}</p>
                </div>


            </div>

            <div className='card-back'>
                <div className='black-swipe'></div>
                <div className='cvc-fill'>
                    <p id='cvc-num'>{cvc}</p>
                </div>
                <div className='line-1'></div>
                <div className='line-2'></div>
                <div className='line-3'></div>
                <div className='line-4'></div>

                <div className='line-5'></div>
                <div className='line-6'></div>
                <div className='line-7'></div>
                <div className='line-8'></div>


                <div className='line-9'></div>
                <div className='line-10'></div>
                <div className='line-11'></div>
                <div className='line-12'></div>

            </div>
        </>


    )
}

export default Cards
