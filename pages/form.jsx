import { useState } from 'react';
import Typography from 'funuicss/component/Typography';
import Button from 'funuicss/component/Button';
import Icon from 'funuicss/component/Icon';
import RowFlex from 'funuicss/component/RowFlex';

const TaxReliefForm = () => {
  const [formData, setFormData] = useState({
    employeeSurname: '',
    otherNames: '',
    gender: '',
    dateOfBirth: '',
    motherMaidenName: '',
    socialSecurityNumber: '',
    taxFileNumber: '',
    employerName: '',
    employerAddress: '',
    employerTelephone: '',
    employerTaxId: '',
    oldAgeRelief: '',
    maritalStatus: '',
    dependentSpouse: '',
    spouseDateOfBirth: '',
    spouseTaxId: '',
    numberOfChildren: '',
    children: [],
    isDisabled: false,
  });

  const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const errors = {};
    // Implement validation for each field here

    // Check if required fields are filled
    if (!formData.employeeSurname) {
      errors.employeeSurname = 'Employee surname is required';
    }
    // ... add more validation rules here

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Handle successful submission
        console.log('Form submitted successfully');
      } else {
        // Handle submission error
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
   <div>
    <div className="header ">
        <div className="width-700-max center fit">
            <RowFlex gap='1rem' responsiveSmall>
        <div className='row-flex'>
            <img src='/logo.png' className='width-80 height-80' />
            <img src='/ca.png' className='width-100 height-100 show-small' />
        </div>
        <div>
            <Typography
            text={`GHANA REVENUE AUTHORITY `}
            heading="h2"
            lighter
            />
            <br />
            <Typography
            text={`Tax relief application form (2023)`}
            heading="h6"
            italic
            /></div>
                  <div className='hide-small'>
            <img src='/ca.png' className='width-100 height-100' />
        </div>
            </RowFlex>
        </div>
  
    </div>
     <form onSubmit={handleSubmit} className='row form'>
        <div className="col lg-12 padding margin-top-30 margin-bottom-20">
            <Typography
            text='Personal Information'
            heading='h4'
            lighter
            />
        </div>
      <div className='col sm-12 md-6 lg-6 padding'>
        <label className='text-italic text-primary text-small text-bold'>
          Employee's Surname:
          <input
          className='input full-width lighter borderless'
            type="text"
            value={formData.employeeSurname}
            onChange={(e) =>
              setFormData({ ...formData, employeeSurname: e.target.value })
            }
          />
          {errorMessages.employeeSurname && (
            <span className='text-danger text-small text-bold'>{errorMessages.employeeSurname}</span>
          )}
        </label>
      </div>


      <div className='col sm-12 md-6 lg-6 padding'>
        <label className='text-italic text-primary text-small text-bold'>
          Other Name(s):
          <input
          className='input full-width lighter borderless'
            type="text"
            value={formData.otherNames}
            onChange={(e) =>
              setFormData({ ...formData, otherNames: e.target.value })
            }
          />
            {errorMessages.otherNames && (
            <span className='text-danger text-small text-bold'>{errorMessages.otherNames}</span>
          )}
        </label>
      </div>

      <div className='col sm-12 md-6 lg-6 padding'>
        <label className='text-italic text-primary text-small text-bold'>
          Gender:
          <select
          className='input full-width lighter borderless'
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>

      <div className='col sm-12 md-6 lg-6 padding'>
  <label className='text-italic text-primary text-small text-bold'>
    Date of Birth:
    <input
    className='input full-width lighter borderless'
      type="date"
      value={formData.dateOfBirth}
      onChange={(e) =>
        setFormData({ ...formData, dateOfBirth: e.target.value })
      }
    />
  </label>
</div>

<div className='col sm-12 md-6 lg-6 padding'>
  <label className='text-italic text-primary text-small text-bold'>
    Mother's Maiden Name:
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.motherMaidenName}
      onChange={(e) =>
        setFormData({ ...formData, motherMaidenName: e.target.value })
      }
    />
  </label>
</div>

<div className='col sm-12 md-6 lg-6 padding'>
  <label className='text-italic text-primary text-small text-bold'>
    Social Security Number:
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.socialSecurityNumber}
      onChange={(e) =>
        setFormData({ ...formData, socialSecurityNumber: e.target.value })
      }
    />
  </label>
</div>


<div className='col sm-12 md-6 lg-6 padding'>
  <label className='text-italic text-primary text-small text-bold'>
    Marital Status:
    <select
    className='input full-width lighter borderless'
      value={formData.maritalStatus}
      onChange={(e) =>
        setFormData({ ...formData, maritalStatus: e.target.value })
      }
    >
      <option value="">Select marital status</option>
      <option value="Married">Married</option>
      <option value="Single">Single</option>
    </select>
  </label>
</div>
<div className="col lg-12 padding margin-top-30 margin-bottom-20">
<Typography
text='Employment Information'
heading='h4'
lighter
/>
</div>
<div className='col sm-12 md-6 lg-6 padding'>
  <label className='text-italic text-primary text-small text-bold'>
    Name of Employer:
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.employerName}
      onChange={(e) =>
        setFormData({ ...formData, employerName: e.target.value })
      }
    />
  </label>
</div>

<div className='col sm-12 md-6 lg-6 padding'>
  <label className='text-italic text-primary text-small text-bold'>
    Address of Employer:
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.employerAddress}
      onChange={(e) =>
        setFormData({ ...formData, employerAddress: e.target.value })
      }
    />
  </label>
</div>

<div className='col sm-12 md-6 lg-6 padding'>
  <label className='text-italic text-primary text-small text-bold'>
    Telephone Number of Employer:
    <input
    className='input full-width lighter borderless'
      type="tel"
      value={formData.employerTelephone}
      onChange={(e) =>
        setFormData({ ...formData, employerTelephone: e.target.value })
      }
    />
  </label>
</div>

<div className='col sm-12 md-6 lg-6 padding'>
  <label className='text-italic text-primary text-small text-bold'>
    Tax ID Number of Employer:
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.employerTaxId}
      onChange={(e) =>
        setFormData({ ...formData, employerTaxId: e.target.value })
      }
    />
  </label>
</div>
<div className="col lg-12 padding margin-top-30 margin-bottom-20">
<Typography
text='Tax Relief Information'
heading='h4'
lighter
/>
</div>
<div className='col sm-12 md-6 lg-6 padding'>
  <label className='text-italic text-primary text-small text-bold'>
    Tax File Number:
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.taxFileNumber}
      onChange={(e) =>
        setFormData({ ...formData, taxFileNumber: e.target.value })
      }
    />
  </label>
</div>
<div className='col sm-12 md-6 lg-6 padding'>
  <label className='text-italic text-primary text-small text-bold'>
    Old Age Relief Status:
    <select
    className='input full-width lighter borderless'
      value={formData.oldAgeRelief}
      onChange={(e) =>
        setFormData({ ...formData, oldAgeRelief: e.target.value })
      }
    >
      <option value="">Select old age relief status</option>
      <option value="Granted">Granted</option>
      <option value="Not Granted">Not Granted</option>
    </select>
  </label>
</div>



<div className='col sm-12 md-6 lg-6 padding'>
  <label className='text-italic text-primary text-small text-bold'>
    Name of Dependant Spouse:
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.dependentSpouse}
      onChange={(e) =>
        setFormData({ ...formData, dependentSpouse: e.target.value })
      }
    />
  </label>
</div>

<div className='col sm-12 md-6 lg-6 padding'>
  <label className='text-italic text-primary text-small text-bold'>
    Spouse's Date of Birth:
    <input
    className='input full-width lighter borderless'
      type="date"
      value={formData.spouseDateOfBirth}
      onChange={(e) =>
        setFormData({ ...formData, spouseDateOfBirth: e.target.value })
      }
    />
  </label>
</div>

<div className='col sm-12 md-6 lg-6 padding'>
  <label className='text-italic text-primary text-small text-bold'>
    Spouse's Tax ID Number:
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.spouseTaxId}
      onChange={(e) =>
        setFormData({ ...formData, spouseTaxId: e.target.value })
      }
    />
  </label>
</div>

<div className='col sm-12 md-6 lg-6 padding'>
  <label className='text-italic text-primary text-small text-bold'>
    Number of Children:
    <input
    className='input full-width lighter borderless'
      type="number"
      value={formData.numberOfChildren}
      onChange={(e) =>
        setFormData({ ...formData, numberOfChildren: e.target.value })
      }
    />
  </label>
</div>

{/* Continue adding input
className='input full-width lighter borderless' fields for children's particulars, disability status, etc. */}

<div className='col sm-12 md-6 lg-6 padding'>
  <button type="submit" className='button gradient full-width roundBtn'>Submit</button>
</div>



    </form>
   </div>
  );
};

export default TaxReliefForm;
