import React, { useState } from 'react';

function FormComponent() {

  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    agreeToTerms: false,
    gender: '',
    favoriteColor: '',
    comments: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Text Input */}
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />

       
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />

        {/* Checkbox */}
        <label>
          Agree to Terms:
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
          />
        </label>
        <br />

        
        <fieldset>
          <legend>Gender:</legend>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="transgender"
              checked={formData.gender === 'transgender'}
              onChange={handleChange}
            />
            Transgender
          </label>
        </fieldset>
        <br />

        
        <label>
          Favorite Color:
          <select
            name="favoriteColor"
            value={formData.favoriteColor}
            onChange={handleChange}
          >
            <option value="">Select Color</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
            <option value="White">White</option>
          </select>
        </label>
        <br />

        
        <label>
          Comments:
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </label>
        <br />

      
        <button type="submit">Submit</button>
      </form>

      {/* Display Submitted Data */}
      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Full Name: {submittedData.name}</p>
          <p>Age: {submittedData.age}</p>
          <p>Agree to Terms: {submittedData.agreeToTerms ? 'Yes' : 'No'}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>Favorite Color: {submittedData.favoriteColor}</p>
          <p>Comments: {submittedData.comments}</p>
        </div>
      )}
    </div>
  );
}

export default FormComponent;