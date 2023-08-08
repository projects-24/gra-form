import { useState } from 'react';
import Typography from 'funuicss/component/Typography';
import Button from 'funuicss/component/Button';
import RowFlex from 'funuicss/component/RowFlex';
import Table from 'funuicss/component/Table'
import TableHead from 'funuicss/component/TableHead'
import TableData from 'funuicss/component/TableData'
import TableRow from 'funuicss/component/TableRow'
import PrintSheet from './print_data';

import Modal from 'funuicss/component/Modal'
import ModalHeader from 'funuicss/component/ModalHeader'
import CloseModal from 'funuicss/component/CloseModal'
import ModalContent from 'funuicss/component/ModalContent'
import ModalAction from 'funuicss/component/ModalAction'
import Icon from 'funuicss/component/Icon'
import Div from 'funuicss/component/Div'
import FunLoader from 'funuicss/component/FunLoader'
import SuccessModal from "../components/Modals/SuccessModal"
import InfoModal from "../components/Modals/InfoModal"
import {FunRequest} from 'funuicss/js/Fun'
const TaxReliefForm = () => {
  const [print, setprint] = useState(false)
  const [loading, setloading] = useState(false)
  const [success, setsuccess] = useState("")
  const [info, setinfo] = useState("")

  let EndPoint = "https://gra-form-backend.onrender.com/api"
  const [formData, setFormData] = useState({
    employeesurname: '',
    othernames: '',
    gender: '',
    dateofbirth: '',
    mothermaidenname: '',
    socialsecuritynumber: '',
    taxfilenumber: '',
    employername: '',
    employeraddress: '',
    telephonenumber: '',
    taxid: '',
    changesinpersonal: '',
    maritalstatus: '',
    dependentspouse: '',
    spousedateofbirth: '',
    spousetaxtfilenumber: '',
    spousesocialsecuritynumber: '',
    spousetaxid: '',
    numberofchildren: '',
    firstchildname:'',
    firstchilddob:'',
    firstchildinstitution:'',
    secondchildname:'',
    secondchilddob:'',
    secondchildinstitution:'',
    thirdchildname:'',
    thirdchilddob:'',
    thirdchildinstitution:'',
    isdisabled: false,
    employeeverify:false,

  });
  const Print = ()=>{
    new Promise((resolve, reject) => {
    setprint(true)
      resolve()
    })
    .then(()=>{
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
        resolve()
      }).then(()=>{
        window.location.reload()
      })
    })
  }
  const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = formData
    if(  
      data.employeesurname !== '' &&
    data.othernames !== '' &&
    data.gender !== '' &&
    data.dateofbirth !== '' &&
    data.mothermaidenname !== '' &&
    data.socialsecuritynumber !== '' &&
    data.taxfilenumber !== '' &&
    data.employername !== '' &&
    data.employeraddress !== '' &&
    data.telephonenumber !== '' &&
    data.taxid !== '' &&
    data.changesinpersonal !== '' &&
    data.maritalstatus !== '' &&
    data.numberofchildren !== '' &&
    data.isdisabled !== '' &&
    data.employeeverify !== ''
    ){
      setloading(true)
      FunRequest.post(EndPoint + '/employee' , data).then((doc)=>{
        console.log(doc)
        setsuccess({
          header:"Submitted",
          message:"Wait for priting"
        })
        setloading(false)
        setTimeout(() => {
              // Print()
              setsuccess(false)
    setprint(true)
        }, 3000);
      })
        .catch(err=>{
          setloading(false)
        })
    }else{
      setinfo({
        header:"Invalid Fields",
        message:"Enter all the valid fields"
      })
      setTimeout(() => {

        setinfo(false)
  }, 3000);
    }

  };

  return (
   <div>
{
  loading &&
  <FunLoader fixed size="70px"/>
}
{
  success && <SuccessModal header={success.header} message={success.message} />
}
{
  info && <InfoModal header={info.header} message={info.message} />
}
    {
      <Modal 
animation="ScaleUp" 
duration={0.4} 
open={print}
backdrop
maxWidth="1200px"
>
<ModalHeader>
  Print data
  <CloseModal  onClick={()=>setprint(false)}/>
</ModalHeader>
<ModalContent funcss="padding-20">
<div className="width-900-max center" style={{height:"80vh"}} id='documents'>
<PrintSheet doc={formData}/>
</div>
</ModalContent>
<ModalAction funcss="text-right light bottomEdge padding-20">
<Button 
bg="primary"
outlined
text="Print Data"
rounded
startIcon={<i className='fas fa-printer' />}
onClick={()=>Print()}
/>

</ModalAction>
</Modal>
    }
    
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
      <div id="">


<div className="col lg-12  margin-top-30">
  <div className="row border padding round-edge">
  <div className='col sm-12 md-12 lg-12 padding'>
        <label className='text-italic text-primary text-small text-bold'>
          {`Employee's Surname:`}
          <input
          className='input full-width lighter borderless'
            type="text"
            value={formData.employeesurname}
            onChange={(e) =>
              setFormData({ ...formData, employeesurname: e.target.value })
            }
          />
          {!formData.employeesurname && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
        </label>
      </div>


      <div className={"col sm-6 md-6 lg-6 padding"}>
        <label className='text-italic text-primary text-small text-bold'>
          Other Name(s):
          <input
          className='input full-width lighter borderless'
            type="text"
            value={formData.othernames}
            onChange={(e) =>
              setFormData({ ...formData, othernames: e.target.value })
            }
          />
            {errorMessages.othernames && (
            <span className='text-danger text-small text-bold'>{errorMessages.othernames}</span>
          )}
        </label>
        {!formData.othernames && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
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
        {!formData.gender && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
      </div>

      <div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    Date of Birth:
    <input
    className='input full-width lighter borderless'
      type="date"
      value={formData.dateofbirth}
      onChange={(e) =>
        setFormData({ ...formData, dateofbirth: e.target.value })
      }
    />
  </label>
  {!formData.dateofbirth && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>

<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    {`Mother's Maiden Name:`}
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.mothermaidenname}
      onChange={(e) =>
        setFormData({ ...formData, mothermaidenname: e.target.value })
      }
    />
  </label>
  {!formData.mothermaidenname && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>

<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    Social Security Number:
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.socialsecuritynumber}
      onChange={(e) =>
        setFormData({ ...formData, socialsecuritynumber: e.target.value })
      }
    />
  </label>
  {!formData.socialsecuritynumber && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>

<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    Tax File Number:
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.taxfilenumber}
      onChange={(e) =>
        setFormData({ ...formData, taxfilenumber: e.target.value })
      }
    />
  </label>
  {!formData.taxfilenumber && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>
<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    Name of Employer:
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.employername}
      onChange={(e) =>
        setFormData({ ...formData, employername: e.target.value })
      }
    />
  </label>
  {!formData.employername && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>

<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    Address of Employer:
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.employeraddress}
      onChange={(e) =>
        setFormData({ ...formData, employeraddress: e.target.value })
      }
    />
  </label>
  {!formData.employeraddress && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>

<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    Telephone Number:
    <input
    className='input full-width lighter borderless'
      type="tel"
      value={formData.telephonenumber}
      onChange={(e) =>
        setFormData({ ...formData, telephonenumber: e.target.value })
      }
    />
  </label>
  {!formData.telephonenumber && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>

<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    Tax ID:
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.taxid}
      onChange={(e) =>
        setFormData({ ...formData, taxid: e.target.value })
      }
    />
  </label>
  {!formData.taxid && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>
<div className="col lg-12 padding margin-top-30 margin-bottom-20">
<Typography
text='Has there been any changes in your personal particulars from that of the previous one?'
/>
<select
    className='input full-width lighter borderless'
      value={formData.changesinpersonal}
      onChange={(e) =>
        setFormData({ ...formData, changesinpersonal: e.target.value })
      }
    >
      <option value="">Select yes or no</option>
      <option value="True">Yes</option>
      <option value="False">No</option>
    </select>
    {!formData.changesinpersonal && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>


</div>
</div>
<div className="col lg-12  margin-top-30">
  <div className="row border padding round-edge">
    <div className="col lg-12 padding">
<Typography
text='Personal particulars'
heading='h4'
lighter
/>
</div>
<div className={ "col sm-12 md-12 lg-12 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    Marital Status:
    <select
    className='input full-width lighter borderless'
      value={formData.maritalstatus}
      onChange={(e) =>
        setFormData({ ...formData, maritalstatus: e.target.value })
      }
    >
      <option value="">Select marital status</option>
      <option value="Married">Married</option>
      <option value="Single">Single</option>
    </select>
  </label>
  {!formData.maritalstatus && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>
{
  formData.maritalstatus == "Married" &&
  <div className="row">
    <div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    Name of Dependant Spouse:
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.dependentspouse}
      onChange={(e) =>
        setFormData({ ...formData, dependentspouse: e.target.value })
      }
    />
  </label>
  {!formData.dependentspouse && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>


<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    {`Spouse's Date of Birth:`}
    <input
    className='input full-width lighter borderless'
      type="date"
      value={formData.spousedateofbirth}
      onChange={(e) =>
        setFormData({ ...formData, spousedateofbirth: e.target.value })
      }
    />
  </label>
  {!formData.spousedateofbirth && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>

<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    {`Spouse's Tax File Number:`}
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.spousetaxtfilenumber}
      onChange={(e) =>
        setFormData({ ...formData, spousetaxtfilenumber: e.target.value })
      }
    />
  </label>
  {!formData.spousetaxtfilenumber && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>
<div className={"col sm-6 md-6 lg-6 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    {`Spouse's Social Security Number:`}
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.spousesocialsecuritynumber}
      onChange={(e) =>
        setFormData({ ...formData, spousesocialsecuritynumber: e.target.value })
      }
    />
  </label>
  {!formData.spousesocialsecuritynumber && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>
<div className={"col sm-12 md-12 lg-12 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    {`Spouse's Tax ID Number:`}
    <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.spousetaxid}
      onChange={(e) =>
        setFormData({ ...formData, spousetaxid: e.target.value })
      }
    />
  </label>
  {!formData.spousetaxid && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>
  </div>
}

<div className={"col sm-12 md-12 lg-12 padding"}>
  <label className='text-italic text-primary text-small text-bold'>
    Number of Children:
    <input
    className='input full-width lighter borderless'
      type="number"
      value={formData.numberofchildren}
      onChange={(e) =>
        setFormData({ ...formData, numberofchildren: e.target.value })
      }
    />
  </label>
  {!formData.numberofchildren && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>
{
  formData.numberofchildren && parseInt(formData.numberofchildren) > 0 &&
  <div className='col sm-12 md-12 lg-12 padding border round-edge section'>
  <label className='text-italic text-primary text-small text-bold'>
    {`Childrens details `}
  </label>
  <Table funcss='text-small ' stripped>
    <TableHead>
      <TableData>Name</TableData>
      <TableData>Date Of Birth</TableData>
      <TableData>Educational Institution</TableData>
    </TableHead>
    <tbody>
      {
        parseInt(formData.numberofchildren) > 0 &&
        <TableRow>
        <TableData>
        <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.firstchildname}
      placeholder='Full Name'
      onChange={(e) =>
        setFormData({ ...formData, firstchildname: e.target.value })
      }
    />
        </TableData>
        <TableData>
        <input
    className='input full-width lighter borderless'
      type="date"
      value={formData.firstchilddob}
      onChange={(e) =>
        setFormData({ ...formData, firstchilddob: e.target.value })
      }
    />
        </TableData>
        <TableData>
        <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.firstchildinstitution}
      placeholder='Institution Name'
      onChange={(e) =>
        setFormData({ ...formData, firstchildinstitution: e.target.value })
      }
    />
        </TableData>
      </TableRow>
      }
      {
        parseInt(formData.numberofchildren) > 1 &&
        
      <TableRow>
      <TableData>
      <input
  className='input full-width lighter borderless'
    type="text"
    value={formData.secondchildname}
    placeholder='Full Name'
    onChange={(e) =>
      setFormData({ ...formData, secondchildname: e.target.value })
    }
  />
      </TableData>
      <TableData>
      <input
  className='input full-width lighter borderless'
    type="date"
    value={formData.secondchilddob}
    onChange={(e) =>
      setFormData({ ...formData, secondchilddob: e.tarcet.vdlue })
    }
  />
      </TableData>
      <TableData>
      <input
  className='input full-width lighter borderless'
    type="text"
    value={formData.secondchildinstitution}
    placeholder='Institution Name'
    onChange={(e) =>
      setFormData({ ...formData, secondchildinstitution: e.target.value })
    }
  />
      </TableData>
    </TableRow>
      }
      {
        parseInt(formData.numberofchildren) > 2 &&
        <TableRow>
        <TableData>
        <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.thirdchildname}
      placeholder='Full Name'
      onChange={(e) =>
        setFormData({ ...formData, thirdchildname: e.target.value })
      }
    />
        </TableData>
        <TableData>
        <input
    className='input full-width lighter borderless'
      type="date"
      value={formData.thirdchilddob}
      onChange={(e) =>
        setFormData({ ...formData, thirdchilddob: e.target.value })
      }
    />
        </TableData>
        <TableData>
        <input
    className='input full-width lighter borderless'
      type="text"
      value={formData.thirdchildinstitution}
      placeholder='Institution Name'
      onChange={(e) =>
        setFormData({ ...formData, thirdchildinstitution: e.target.value })
      }
    />
        </TableData>
      </TableRow>
      }


     
    </tbody>
  </Table>
</div>
}
<div className='col sm-12 md-12 lg-12 padding'>
  <label className='text-italic text-primary text-small text-bold'>
    {`Are you disabled(if yes then attach certificate from department of social welfare):`}
    <select
    className='input full-width lighter borderless'
      value={formData.isdisabled}
      onChange={(e) =>
        setFormData({ ...formData, isdisabled: e.target.value })
      }
    >
      <option value="">Select Yes or No</option>
      <option value={true}>Yes</option>
      <option value={false}>No</option>
    </select>
  </label>
  {!formData.isdisabled && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}
</div>

  </div>
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
      value={formData.employeeverify}
      onChange={(e) =>
        setFormData({ ...formData, employeeverify: e.target.value })
      }
    >
      <option value="">Select Yes or No</option>
      <option value={true}>Yes</option>
      <option value={false}>No</option>
    </select>
    {!formData.employeeverify && (
            <span className='text-danger text-small text-bold'>{"Fill detail"}</span>
          )}

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
