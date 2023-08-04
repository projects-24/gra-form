import { useState } from 'react';
import Typography from 'funuicss/component/Typography';
import Button from 'funuicss/component/Button';
import Icon from 'funuicss/component/Icon';
import RowFlex from 'funuicss/component/RowFlex';
import Table from 'funuicss/component/Table'
import TableHead from 'funuicss/component/TableHead'
import TableData from 'funuicss/component/TableData'
import TableRow from 'funuicss/component/TableRow'
const TaxReliefForm = () => {
  const [print, setprint] = useState(false)
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
    telephoneNumber: '',
    taxId: '',
    changesInPersonal: '',
    maritalStatus: '',
    dependentSpouse: '',
    spouseDateOfBirth: '',
    spouseTaxtFileNumber: '',
    spouseSocialSecurityNumber: '',
    spouseTaxId: '',
    numberOfChildren: '',
    firstChildName:'',
    firstChildDob:'',
    firstChildInstitution:'',
    secondChildName:'',
    firstChildDob:'',
    secondChildInstitution:'',
    thirdChildDob:'',
    firstChildDob:'',
    thirdChildInstitution:'',
    isDisabled: false,
    employeeVerify:'',

  });
  const Print = ()=>{
    setprint(true)
    new Promise((resolve, reject) => {
      const myElement = document.getElementById('documents');
      printElement(myElement);
      function printElement(element) {
          const originalContents = document.body.innerHTML;
          const printContents = element.innerHTML;
    
          document.body.innerHTML = printContents;
          window.print();
    
          document.body.innerHTML = originalContents;
    
      }

    }).then(()=>setprint(false))
  }
  const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = JSON.stringify(formData)
    console.log(JSON.parse(data))
    Print()
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
     <form onSubmit={handleSubmit} className={`form ${print ? "printedDoc" : ''}`}>
      <div id="documents">
      <div className="col lg-12 padding margin-top-30 margin-bottom-20">
       <RowFlex justify='space-between' gap='1rem'>
        <div>
        <RowFlex gap='1rem'>
        <div className='row-flex'>
            <img src='/logo.png' className='width-80 height-80' />
            <img src='/ca.png' className='width-100 height-100 show-small' />
        </div>
        <div>
            <Typography
            text={`GHANA REVENUE AUTHORITY `}
            heading="h4"
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
        <div>
          <div className="border padding central text-small text-italic round-edge lighter" style={{width:'120px', height:"120px"}}>
            Attach passport
          </div>
        </div>
       </RowFlex>
        </div>
     



<div className="col lg-12  margin-top-30">
  <div className="row border padding round-edge">
  <div className='col sm-12 md-12 lg-12 padding'>
        <label className='text-italic text-primary text-small text-bold'>
          {`Employee's Surname:`}
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


      <div className={"col sm-6 md-6 lg-6 padding"}>
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

      <div className={"col sm-6 md-6 lg-6 padding"}>
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

      <div className={"col sm-6 md-6 lg-6 padding"}>
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

<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    {`Mother's Maiden Name:`}
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

<div className={"col sm-6 md-6 lg-6 padding"}>
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

<div className={"col sm-6 md-6 lg-6 padding"}>
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
<div className={"col sm-6 md-6 lg-6 padding"}>
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

<div className={"col sm-6 md-6 lg-6 padding"}>
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

<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    Telephone Number:
    <input
    className='input full-width lighter borderless'
      type="tel"
      value={formData.telephoneNumber}
      onChange={(e) =>
        setFormData({ ...formData, telephoneNumber: e.target.value })
      }
    />
  </label>
</div>

<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    Tax ID:
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.taxId}
      onChange={(e) =>
        setFormData({ ...formData, taxId: e.target.value })
      }
    />
  </label>
</div>
<div className="col lg-12 padding margin-top-30 margin-bottom-20">
<Typography
text='Has there been any changes in your personal particulars from that of the previous one?'
/>
<select
    className='input full-width lighter borderless'
      value={formData.changesInPersonal}
      onChange={(e) =>
        setFormData({ ...formData, changesInPersonal: e.target.value })
      }
    >
      <option value="">Select yes or no</option>
      <option value="True">Yes</option>
      <option value="False">No</option>
    </select>
</div>


</div>
</div>
<div className="col lg-12  margin-top-30">
  <div className="row border padding round-edge">
    <div className="col lg-12 padding margin-bottom-20">
<Typography
text='Personal particulars'
heading='h4'
lighter
/>
</div>
<div className={"col sm-6 md-6 lg-6 padding"}>
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
<div className={"col sm-6 md-6 lg-6 padding"}>
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


<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    {`Spouse's Date of Birth:`}
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

<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    {`Spouse's Tax File Number:`}
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.spouseTaxtFileNumber}
      onChange={(e) =>
        setFormData({ ...formData, spouseTaxtFileNumber: e.target.value })
      }
    />
  </label>
</div>
<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    {`Spouse's Social Security Number:`}
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.spouseSocialSecurityNumber}
      onChange={(e) =>
        setFormData({ ...formData, spouseSocialSecurityNumber: e.target.value })
      }
    />
  </label>
</div>
<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    {`Spouse's Tax ID Number:`}
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

<div className={"col sm-12 md-12 lg-12 padding"}>
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
<div className='col sm-12 md-12 lg-12 padding border round-edge section'>
  <label className='text-italic text-primary text-small text-bold'>
    {`Childrens details `}
  </label>
  <Table funcss='text-small' stripped>
    <TableHead>
      <TableData>Name</TableData>
      <TableData>Date Of Birth</TableData>
      <TableData>Educational Institution</TableData>
    </TableHead>
    <tbody>
      <TableRow>
        <TableData>
        <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.firstChildName}
      placeholder='Full Name'
      onChange={(e) =>
        setFormData({ ...formData, firstChildName: e.target.value })
      }
    />
        </TableData>
        <TableData>
        <input
    className='input full-width lighter borderless'
      type="date"
      value={formData.firstChildDob}
      onChange={(e) =>
        setFormData({ ...formData, firstChildDob: e.target.value })
      }
    />
        </TableData>
        <TableData>
        <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.firstChildInstitution}
      placeholder='Institution Name'
      onChange={(e) =>
        setFormData({ ...formData, firstChildInstitution: e.target.value })
      }
    />
        </TableData>
      </TableRow>

      <TableRow>
        <TableData>
        <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.secondChildName}
      placeholder='Full Name'
      onChange={(e) =>
        setFormData({ ...formData, secondChildName: e.target.value })
      }
    />
        </TableData>
        <TableData>
        <input
    className='input full-width lighter borderless'
      type="date"
      value={formData.firstChildDob}
      onChange={(e) =>
        setFormData({ ...formData, secondChildDob: e.target.value })
      }
    />
        </TableData>
        <TableData>
        <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.secondChildInstitution}
      placeholder='Institution Name'
      onChange={(e) =>
        setFormData({ ...formData, secondChildInstitution: e.target.value })
      }
    />
        </TableData>
      </TableRow>
      <TableRow>
        <TableData>
        <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.thirdChildName}
      placeholder='Full Name'
      onChange={(e) =>
        setFormData({ ...formData, thirdChildName: e.target.value })
      }
    />
        </TableData>
        <TableData>
        <input
    className='input full-width lighter borderless'
      type="date"
      value={formData.thirdChildDob}
      onChange={(e) =>
        setFormData({ ...formData, thirdChildDob: e.target.value })
      }
    />
        </TableData>
        <TableData>
        <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.thirdChildInstitution}
      placeholder='Institution Name'
      onChange={(e) =>
        setFormData({ ...formData, thirdChildInstitution: e.target.value })
      }
    />
        </TableData>
      </TableRow>
    </tbody>
  </Table>
</div>
<div className='col sm-12 md-12 lg-12 padding'>
  <label className='text-italic text-primary text-small text-bold'>
    {`Are you disabled(if yes then attach certificate from department of social welfare):`}
    <select
    className='input full-width lighter borderless'
      value={formData.isDisabled}
      onChange={(e) =>
        setFormData({ ...formData, isDisabled: e.target.value })
      }
    >
      <option value="">Select Yes or No</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  </label>
</div>

  </div>
</div>


<div className="col lg-12 padding-20 margin-top-30 margin-bottom-20 border round-edge">
<Typography
text='Declaration of Employer'
heading='h4'
lighter
/>
<p />
<Typography
text={
  `
  I do hereby declare that the above information is to the best of my knowledge and beleief True, Correct and Complete
  `
}
article
color="secondary"
italic
/>
<RowFlex funcss='margin-top-30' justify='space-between'>
    <div>
      <div className="bb width-200"></div>
      <div className='text-secondary text-italic'>Signature</div>
    </div>
    <div>
      <div className="bb width-200"></div>
      <div className='text-secondary text-italic'>Declaration</div>
    </div>
    <div>
      <div className="bb width-200"></div>
      <div className='text-secondary text-italic'>Date</div>
    </div>
</RowFlex>
</div>
<div className="col lg-12 padding-20 margin-top-30 margin-bottom-20 border round-edge">
<Typography
text='Declaration of Employee'
heading='h4'
lighter
/>
<p />
<Typography
text={`Do you have any other sources of ... than your employment?`}
article
color="secondary"
italic
/>
<select
    className='input full-width lighter borderless'
      value={formData.employeeVerify}
      onChange={(e) =>
        setFormData({ ...formData, employeeVerify: e.target.value })
      }
    >
      <option value="">Select Yes or No</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
<RowFlex funcss='margin-top-30 margin-bottom-30' justify='space-between'>
    <div>
      <div className="bb width-200"></div>
      <div className='text-secondary text-italic'>Signature</div>
    </div>
 
    <div>
      <div className="bb width-200"></div>
      <div className='text-secondary text-italic'>Date</div>
    </div>
</RowFlex>
<Typography
text={`The above employment is my primary employment and an ether Tax Relief Cand is inued or will be issued for this year`}
article
color="secondary"
italic
/>
</div>
      </div>

<div className={"col sm-6 md-6 lg-6 padding"}>
  <button type="submit" className='button gradient full-width roundBtn'>Submit & Print</button>
</div>



    </form>
   </div>
  );
};

export default TaxReliefForm;
