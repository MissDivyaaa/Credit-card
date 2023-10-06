import './App.css';
import React, { useState } from 'react';
import Cards from './Cards';
import FormValidate from './FormValidate';
function App() {
  const [formData, setFormData] = useState({
    cardNumber: '0000 0000 0000 0000',
    cardHolder: 'JANE APPLESEED',
    expiryMonth: '00',
    expiryYear: '00',
    cvc: '000'
  });

  const formatCardNumber = (cardNumber) => {
    return cardNumber
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      .join(' ');
  };

  const handleFormSubmit = (formData) => {
    // Update formData state with the form data
    formData.cardNumber = formatCardNumber(formData.cardNumber);
    setFormData(formData);
  };
  return (
    <>
      <FormValidate onFormSubmit={handleFormSubmit} />
      <Cards
        cardNumber={formData.cardNumber}
        cardHolder={formData.cardHolder}
        expiryMonth={formData.expiryMonth}
        expiryYear={formData.expiryYear}
        cvc={formData.cvc}
      />

    </>
  );
}

export default App;
