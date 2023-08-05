import React from 'react'
import Grid from 'funuicss/component/Grid'
import Col from 'funuicss/component/Col'
import Typography from 'funuicss/component/Typography'
import Div from 'funuicss/component/Div'
import RowFlex from 'funuicss/component/RowFlex'
import Table from 'funuicss/component/Table'
import TableHead from 'funuicss/component/TableHead'
import TableData from 'funuicss/component/TableData'
import TableRow from 'funuicss/component/TableRow'
export default function PrintSheet({doc}) {
  return (
    <div>
      <div className="text-small">
        <Div funcss='printContainer'>
            <Div funcss="left">
                <Div>
                <RowFlex gap='1rem' justify='center'>
           <img src='/ca.png' className='width-100 height-100' />
           <img src='/logo.png' className='width-80 height-80' />
           </RowFlex>
        <div className='text-center'>
     
        <div>
        <Typography
            text={`GHANA REVENUE AUTHORITY `}
            heading="h5"
            lighter
            />
            <br />
            <Typography
            text={`Tax relief application form (2023)`}
            italic
            />
            <p className='text-smaller'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>
            <p className='h6'>
               {`Year: 2023`}
            </p>
        </div>
        </div>
                </Div>

                <Div funcss='row'>
    <div className='col sm-6 md-6 lg-6 padding-5'>
    <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Employee's Surname:`}
      </label>
      <Typography
      text={doc.employeeSurname}
      funcss='label'
      />
    </RowFlex>
    </div>

    <div className={"col sm-6 md-6 lg-6 padding-5"}>
    <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Other Names:`}
      </label>
      <Typography
      text={doc.otherNames}
      funcss='label'
      />
    </RowFlex>
    </div>

    <div className={"col sm-6 md-6 lg-6 padding-5"}>
    <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Gender:`}
      </label>
      <Typography
      text={doc.gender}
      funcss='label'
      />
    </RowFlex>
    </div>

    <div className={"col sm-6 md-6 lg-6 padding-5"}>
    <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Date Of Birth:`}
      </label>
      <Typography
      text={doc.dateOfBirth}
      funcss='label'
      />
    </RowFlex>
    </div>

    <div className={"col sm-12 md-12 lg-12 padding-5"}>
      <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Mother's Maiden Name:`}
      </label>
      <Typography
      text={doc.motherMaidenName}
      funcss='label'
      />
    </RowFlex>
    </div>

    <div className={"col sm-6 md-6 lg-6 padding-5"}>
      <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Social Security Number:`}
      </label>
      <Typography
      text={doc.socialSecurityNumber}
      funcss='label'
      />
    </RowFlex>
    </div>

    <div className={"col sm-6 md-6 lg-6 padding-5"}>
    <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Tax File Number:`}
      </label>
      <Typography
      text={doc.taxFileNumber}
      funcss='label'
      />
    </RowFlex>
    </div>
    <div className={"col sm-6 md-12 lg-12 padding-5"}>
    <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Name Of Employer:`}
      </label>
      <Typography
      text={doc.employerName}
      funcss='label'
      />
    </RowFlex>
    </div>
    <div className={"col sm-6 md-12 lg-12 padding-5"}>
    <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Address Of Employer:`}
      </label>
      <Typography
      text={doc.employerAddress}
      funcss='label'
      />
    </RowFlex>
    </div>
    <div className={"col sm-6 md-6 lg-6 padding-5"}>
    <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Telephone Number:`}
      </label>
      <Typography
      text={doc.telephoneNumber}
      funcss='label'
      />
    </RowFlex>
    </div>
    <div className={"col sm-6 md-6 lg-6 padding-5"}>
    <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Tax ID Number:`}
      </label>
      <Typography
      text={doc.taxId}
      funcss='label'
      />
    </RowFlex>
    </div>


    <div className="col lg-12 padding-5 ">
      <Typography text='Personal particulars' heading='h6' lighter />
    </div>

    <div className={"col sm-6 md-6 lg-6 padding-5"}>
    <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Marital Status:`}
      </label>
      <Typography
      text={doc.maritalStatus}
      funcss='label'
      />
    </RowFlex>
    </div>

    <div className={"col sm-6 md-6 lg-6 padding-5"}>
      <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Name of Dependant Spouse:`}
      </label>
      <Typography
      text={doc.dependentSpouse}
      funcss='label'
      />
    </RowFlex>
    </div>


    <div className={"col sm-12 md-12 lg-12 padding-5 border round-edge"}>
     <RowFlex gap='0.5rem' justify='space-between'>
        <Div>
        <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Date Of Birth:`}
      </label>
      <Typography
      text={doc.spouseDateOfBirth}
      funcss='label'
      />
    </RowFlex>
        </Div>
        <Div>
        <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Tax ID No:`}
      </label>
      <Typography
      text={doc.spouseTaxId}
      funcss='label'
      />
    </RowFlex>
        </Div>
     </RowFlex>
     <RowFlex gap='0.5rem' justify='space-between'>
        <Div>
        <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Tax File No:`}
      </label>
      <Typography
      text={doc.spouseTaxtFileNumber}
      funcss='label'
      />
    </RowFlex>
        </Div>
        <Div>
        <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Soc Sec No:`}
      </label>
      <Typography
      text={doc.spouseSocialSecurityNumber}
      funcss='label'
      />
    </RowFlex>
        </Div>
     </RowFlex>
    </div>
    
    <div className="col lg-12 padding-5 ">
      <Typography text='particulars Of Children' heading='h6' lighter />
    </div>

    <div className={"col sm-12 md-12 lg-12 padding-5"}>
    <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Number Of Children:`}
      </label>
      <Typography
      text={doc.numberOfChildren}
      funcss='label'
      />
    </RowFlex>
    </div>

    <div className='col sm-12 md-12 lg-12 padding-5section'>
      <label className='text-italic text-primary text-small text-bold'>
        {`Children's details `}
      </label>
      <Table funcss='text-smaller border round-edge' stripped>
        <TableHead>
          <TableData>Name</TableData>
          <TableData>Date Of Birth</TableData>
          <TableData>Educational Institution</TableData>
        </TableHead>
        <tbody>
          <TableRow>
            <TableData>{doc.firstChildName}</TableData>
            <TableData>{doc.firstChildDob}</TableData>
            <TableData>{doc.firstChildInstitution}</TableData>
          </TableRow>
          <TableRow>
            <TableData>{doc.secondChildName}</TableData>
            <TableData>{doc.secondChildDob}</TableData>
            <TableData>{doc.secondChildInstitution}</TableData>
          </TableRow>
          <TableRow>
            <TableData>{doc.thirdChildName}</TableData>
            <TableData>{doc.thirdChildDob}</TableData>
            <TableData>{doc.thirdChildInstitution}</TableData>
          </TableRow>
        </tbody>
      </Table>
    </div>

    <div className='col sm-12 md-12 lg-12 padding-5 section'>
      <RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Are you disabled(if yes then attach certificate from department of social welfare):`}
      </label>
      <Typography
      text={doc.isDisabled}
      funcss='label'
      />
    </RowFlex>
    </div>

    <div className="col lg-12 section padding border round-edge">
<Typography
text='Declaration of Employer'
heading='h6'
lighter
/>
<br />
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
      <div className="bb width-100"></div>
      <div className='text-secondary text-italic'>Signature</div>
    </div>
    <div>
      <div className="bb width-100"></div>
      <div className='text-secondary text-italic'>Declaration</div>
    </div>
    <div>
      <div className="bb width-100"></div>
      <div className='text-secondary text-italic'>Date</div>
    </div>
</RowFlex>
</div>

<div className="col lg-12 section padding border round-edge">
<Typography
text='Declaration of Employee'
heading='h6'
lighter
/>
<br />
<Div>
<RowFlex gap='0.2rem'>
    <label className='text-italic text-primary text-small text-bold'>
        {`Do you have any other sources of ... than your employment?`}
      </label>
      <Typography
      text={doc.employeeVerify}
      funcss='label'
      />
    </RowFlex>
</Div>

<RowFlex funcss='section' justify='space-between'>
    <div>
      <div className="bb width-100"></div>
      <div className='text-secondary text-italic'>Signature</div>
    </div>
 
    <div>
      <div className="bb width-100"></div>
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
                </Div>
            </Div> 

            <Div funcss="right">
                <Div>
                <div className="border padding-5 central text-small text-italic round-edge lighter"  style={{width:'100%', height:"200px"}}>
            Attach passport
          </div>
                </Div>
                <p />
                <Div funcss="border padding-5">
                    <div className="h6">For Official Use Only</div>
                    <p>
                        <div>
                            If age is over 60 years, Old age relief is granted ammount of 
                        </div>
                        <div className="bb section"></div>
                    </p>
                    <p>
                        <div>
                            marraige relief granted an amount of
                        </div>
                        <div className="bb section"></div>
                    </p>
                    <p>
                        <div>
                            Childrens eduction relief granted for <span className="text-bold text-primary"> {`(4)`} </span>
                            children amount of.
                        </div>
                        <div className="bb section"></div>
                    </p>
                    <p>
                        <div>
                    Qualify for disabled relief
                        </div>
                        <div className="bb section">Yes / No</div>
                    </p>
                    <p>
                        <div className='section'>
                   Computation for summarised amount of relief for the year
                        </div>
                    <RowFlex gap='0.2rem' funcss="section">
                        <div>{`A)`}</div>
                       <div className="bb width-100"></div>
                    </RowFlex>
                    <RowFlex gap='0.2rem' funcss="section">
                        <div>{`+B)`}</div>
                       <div className="bb width-100"></div>
                    </RowFlex>
                    <RowFlex gap='0.2rem' funcss="section">
                        <div>{`+C)`}</div>
                       <div className="bb width-100"></div>
                    </RowFlex>
               
                    </p>
                    <p>
                        <div>
                    Total
                        </div>
                        <div className="bb section">Yes / No</div>
                    </p>
                    <p>
                        <div>
                    Divided by <span className="text-primary italic h6">{`9`}</span> monthly deduction
                        </div>
                    </p>
                    <p>
                        <div>
                    First Deductable Month
                        </div>
                        <div className="bb section"></div>
                    </p>
                    <p>
                        <div className='text-italic'>
                    All the information have been transferred to the TRC
                        </div>
                    </p>
                </Div>
            </Div> 
        </Div>
      </div>
    </div>
  )
}
