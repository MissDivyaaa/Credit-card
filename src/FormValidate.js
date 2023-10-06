import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FormValidate.css';


const FormValidate = (props) => {

    const [inputname, setinputname] = useState('');
    const [inputcardnum, setinputcardnum] = useState('');
    const [inputnum, setinputnum] = useState('');
    const [inputyear, setinputyear] = useState('');
    const [inputcvc, setinputcvc] = useState('');
    const [errorcvc, seterrorcvc] = useState('');
    const [errortext, seterrortext] = useState('');
    const [errornum, seterrornum] = useState('');
    const [errormonth, seterrormonth] = useState('');


    const validateform = () => {

        if (inputname.length === 0) {
            seterrortext('Cardholder name required');
            return true;
        }
        else if (/\d./.test(inputname)) {
            seterrortext('Cardholder name cannot take numbers');
            return true;
        }
        seterrortext('');

        if (inputcardnum.length === 0) {
            seterrornum('Card number required');
            return true;
        }
        else if (inputcardnum.length < 16 || inputcardnum.length > 16) {
            seterrornum('Card number should be of atleast 16 numbers');
            return true;
        }
        seterrornum('');


        return false;
    }
    const validation = () => {

        if (inputnum.length === 0) {
            seterrormonth('invalid');
            return true;
        }
        else if (inputnum.length >= 1 && inputnum.length <= 12) {
            seterrormonth('invalid');
        }
        seterrormonth('');

        if (inputyear.length === 0) {
            return true
        }

        if (inputcvc.length === 0) {
            seterrorcvc('CVC must be numeric');
            return true;
        }
        else if (inputcvc >= 100 && inputcvc <= 999) {
            seterrorcvc('CVC must be numeric');
        }

        seterrorcvc('');
    }

    const handlesubmit = (e) => {

        e.preventDefault();

        if (validateform() || validation()) {
            return;
        }

        const formData = {
            cardNumber: inputcardnum,
            cardHolder: inputname,
            expiryMonth: inputnum,
            expiryYear: inputyear,
            cvc: inputcvc
        };

        setinputname('');
        setinputcardnum('');
        setinputnum('');
        setinputyear('');
        setinputcvc('');
        seterrortext('');
        seterrornum('');
        seterrormonth('');
        seterrorcvc('');

        // Send form data to parent component
        props.onFormSubmit(formData);

    }
    const notify = () => toast.success('Success message 1', {
        position: 'top-left',
        autoClose: 3000, // Auto close the toast after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });



    return (
        <>
            <ToastContainer />
            <div className='main-container'>

                <div className='div-left'></div>
                <div className='div-right'>

                    <div className='container'>



                        <form onSubmit={handlesubmit}>

                            <section>
                                <label>CARDHOLDER NAME</label>
                                <input type='text' placeholder='e.g. Jane Appleseed'

                                    value={inputname} onChange={(e) => {
                                        setinputname(e.target.value);
                                    }} >
                                </input>
                                <p>{errortext}</p>
                            </section>
                            <section>
                                <label>CARD NUMBER</label>
                                <input type='number' placeholder='e.g. 1234 5678 9123 0000'
                                    value={inputcardnum} onChange={(e) => {
                                        setinputcardnum(e.target.value);
                                    }}></input>
                                <p>{errornum}</p>
                            </section>

                            <section className='detail-labels'>
                                <label>EXP. DATE (MM/YY)</label>
                                <label id='label-2'>CVC</label>
                            </section>
                            <section className='details'>
                                <input type='number'
                                    placeholder='MM'
                                    className='infos'
                                    value={inputnum}
                                    min={"1"}
                                    max={"12"}
                                    onChange={(e) => {
                                        setinputnum(e.target.value);
                                    }}></input>

                                <input type='number'
                                    placeholder='YY'
                                    className='infos'
                                    value={inputyear}
                                    onChange={(e) => {
                                        setinputyear(e.target.value);
                                    }}
                                ></input>
                                <input
                                    type='number'
                                    placeholder='e.g. 123'
                                    id='cvc-info'
                                    min={"100"}
                                    max={"999"}
                                    value={inputcvc}
                                    onChange={(e) => {
                                        setinputcvc(e.target.value);
                                    }}></input>

                            </section>
                            <p>{errormonth}</p>
                            <p id='cvc-error'>{errorcvc}</p>
                            <button type='submit' onClick={notify}>Confirm</button>


                        </form>
                    </div>


                </div>

            </div >
        </>
    )

}

export default FormValidate
