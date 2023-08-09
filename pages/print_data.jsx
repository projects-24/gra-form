import React, { useEffect, useState } from 'react'
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


if(doc){
    return (
        <div>
          <div className="text-small">
            <Div funcss='printContainer'>
                <Div funcss="left">
                    <Div>
                    <RowFlex gap='1rem' justify='center'>
           <div>
         <div>   <img src='/logo.png' className='width-50 height-50' /></div>
           <Typography
                text={`GRA `}
                heading="h3"
                bold
                />
           </div>
               <div className='text-center'>
            <img src='/ca.png' className='width-50 height-50' />
         
            <div>
            <div className="h6">{`GHANA REVENUE AUTHORITY `}</div>
              <div>{`TAX RELIEF APPLICATION FORM`}</div>
                <div className='text-smaller'>
                    {`(To be completed by an employer for an employee with only employment income)`}
                </div>
                <div className=''>
                <div className="row-flex central">
                <div>
              {`Year:`}
            </div>
            <div className="width-100 bb">
            <Typography
          text={`2023`}
          />
            </div>
          
          </div>
                </div>
            </div>
            </div>
               </RowFlex>
   
                    </Div>
    
                    <Div funcss='row margin-top-10'>
        <div className='col sm-12 md-12 lg-12'>
        <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`Employee's Surname:`}
          </label>
          <div className="row-flex">
            <div className="width-300 bb">
            <Typography
          text={`${doc.employeeSurname ? doc.employeeSurname : ''}`}
          funcss='label'
          />
            </div>
            <div>
              {`(1)`}
            </div>
          </div>
    
        </RowFlex>
        </div>
    
        <div className={"col sm-12 md-12 lg-12"}>
        <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`Other Names:`}
          </label>
          <div className="row-flex">
            <div className="width-300 bb">
            <Typography
          text={`${doc.othernames ? doc.othernames : ''}`}
          funcss='label'
          />
            </div>
            <div>
              {`(2)`}
            </div>
          </div>
        </RowFlex>
        </div>
    
        <div className={"col sm-6 md-6 lg-6"}>
        <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`Gender:`}
          </label>
          <div>
           <RowFlex>
            <div>
             <RowFlex>
              <div>Male:</div>
              <div>
              <input
          type='checkbox'
          checked={doc.gender.trim().toLowerCase() == "male" ? true : false}
          />
              </div>
              </RowFlex>  
              
              </div>
            <div>
             <RowFlex>
              <div>Female:</div>
              <div>
              <input
          type='checkbox'
          checked={doc.gender.trim().toLowerCase() == "female" ? true : false}
          />
              </div>
              </RowFlex>  
              
              </div>
           </RowFlex>
          </div>
        </RowFlex>
        </div>
    
        <div className={"col sm-6 md-6 lg-6"}>
        <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`Date Of Birth:`}
          </label>
          <Typography
          text={doc.dateofbirth}
          funcss='label'
          underline
          />
        </RowFlex>
        </div>
    
        <div className={"col sm-12 md-12 lg-12 padding-5"}>
          <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`Mother's Maiden Name:`}
          </label>
           <div className="row-flex">
            <div className="width-300 bb">
            <Typography
          text={`${doc.mothermaidenname ? doc.mothermaidenname : ''}`}
          funcss='label'
          />
            </div>
          </div>
        </RowFlex>
        </div>
    
        <div className={"col sm-6 md-6 lg-6"}>
          <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`Social Security Number:`}
          </label>
                    <div className="row-flex">
            <div className="width-100 bb">
            <Typography
          text={`${doc.socialsecuritynumber ? doc.socialsecuritynumber : ''}`}
          funcss='label'
          />
            </div>
            <div>
              {`(3)`}
            </div>
          </div>
        </RowFlex>
        </div>
    
        <div className={"col sm-6 md-6 lg-6 myCols"}>
        <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`Tax File Number:`}
          </label>
                    <div className="row-flex">
            <div className="width-100 bb">
            <Typography
          text={`${doc.taxfilenumber ? doc.taxfilenumber : ''}`}
          funcss='label'
          />
            </div>
            <div>
              {`(4)`}
            </div>
          </div>
        </RowFlex>
        </div>
        <div className={"col sm-6 md-12 lg-12"}>
        <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`Name Of Employer:`}
          </label>
                    <div className="row-flex">
            <div className="width-300 bb">
            <Typography
          text={`${doc.employername ? doc.employername : ''}`}
          funcss='label'
          />
            </div>
            <div>
              {`(6)`}
            </div>
          </div>
        </RowFlex>
        </div>
        <div className={"col sm-12 md-12 lg-12 padding-5"}>
        <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`Address Of Employer:`}
          </label>
                    <div className="row-flex">
            <div className="width-300 bb">
            <Typography
          text={`${doc.employeraddress ? doc.employeraddress : ''}`}
          funcss='label'
          />
            </div>
            {/* <div>
              {`(1)`}
            </div> */}
          </div>
        </RowFlex>
        </div>
        <div className={"col sm-6 md-6 lg-6"}>
        <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`Telephone Number:`}
          </label>
                    <div className="row-flex">
            <div className="width-100 bb">
            <Typography
          text={`${doc.telephonenumber ? doc.telephonenumber : ''}`}
          funcss='label'
          />
            </div>
            <div>
              {`(1)`}
            </div>
          </div>
        </RowFlex>
        </div>
        <div className={"col sm-6 md-6 lg-6"}>
        <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`Tax ID Number:`}
          </label>
      <div className="row-flex">
      <div className="width-100 bb">
      <Typography
      text={`${doc.taxid ? doc.taxid : ''}`}
      funcss='label'
      />
      </div>
      <div>
      {`(1)`}
      </div>
      </div>
        </RowFlex>
        </div>
    
    
        <div className="col lg-12 sm-12 md-12 text-small">
         Has there been any changes in your personal particulars from that of the previous year?
         <RowFlex>
            <div>
             <RowFlex>
              <div>Yes:</div>
              <div>
              <input
          type='checkbox'
          checked={ doc.changesinpersonal ? true : false}
          />
              </div>
              </RowFlex>  
              
              </div>
            <div>
             <RowFlex>
              <div>No:</div>
              <div>
              <input
          type='checkbox'
          checked={ !doc.changesinpersonal ? true : false}
          />
              </div>
              </RowFlex>  
              
              </div>
           </RowFlex>
           <div className="text-small">If no proceed to sign declaration</div>
        </div>
        <div className="col lg-12 sm-12 md-12  margin-top-10">
          {`Personal particulars`}

        </div>
    
        <div className={"col sm-6 md-6 lg-6"}>
        <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
        {`Marital Status:`}
          </label>
          <div>
           <RowFlex>
            <div>
             <RowFlex>
              <div>Married:</div>
              <div>
              <input
          type='checkbox'
          checked={doc.maritalstatus ? doc.maritalstatus.trim().toLowerCase() == "married" ? true : false : ''}
          />
              </div>
              </RowFlex>  
              
              </div>
            <div>
             <RowFlex>
              <div>Single:</div>
              <div>
              <input
          type='checkbox'
          checked={doc.maritalstatus ? doc.maritalstatus.trim().toLowerCase() == "single" ? true : false : ''}
          />
              </div>
              </RowFlex>  
              
              </div>
           </RowFlex>
          </div>
        </RowFlex>
        </div>
    
        <div className={"col sm-12 md-12 lg-12"}>
          <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`If Married, Name of Dependant Spouse:`}
          </label>
          <Typography
          text={doc.dependentspouse ? doc.dependentspouse : ''}
          funcss='label'
          underline
          />
        </RowFlex>
        </div>
    
        <div className={"col sm-12 md-12 lg-12 "}>Particulars of Spouse</div>
        <div className={"col sm-12 md-12 lg-12 padding-5 border round-edge"}>
        
         <RowFlex gap='0.5rem' justify='space-between'>
            <Div>
            <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`Date Of Birth:`}
          </label>
                <div className="row-flex">
      <div className="width-100 bb">
      <Typography
      text={`${doc.spousedateofbirth ? doc.spousedateofbirth : ''}`}
      funcss='label'
      />
      </div>
      {/* <div>
      {`(1)`}
      </div> */}
      </div>
        </RowFlex>
            </Div>
            <Div>
            <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`Tax ID No:`}
          </label>

                <div className="row-flex">
      <div className="width-100 bb">
      <Typography
      text={`${doc.spousetaxid ? doc.spousetaxid : ''}`}
      funcss='label'
      />
      </div>
      {/* <div>
      {`(1)`}
      </div> */}
      </div>
        </RowFlex>
            </Div>
         </RowFlex>
         <RowFlex gap='0.5rem' justify='space-between'>
            <Div>
            <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`Tax File No:`}
          </label>
                <div className="row-flex">
      <div className="width-100 bb">
      <Typography
      text={`${doc.spousetaxtfilenumber ? doc.spousetaxtfilenumber : ''}`}
      funcss='label'
      />
      </div>
      {/* <div>
      {`(1)`}
      </div> */}
      </div>
        </RowFlex>
            </Div>
            <Div>
            <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`Soc Sec No:`}
          </label>
                <div className="row-flex">
      <div className="width-100 bb">
      <Typography
      text={`${doc.spousesocialsecuritynumber ? doc.spousesocialsecuritynumber : ''}`}
      funcss='label'
      />
      </div>
      {/* <div>
      {`(1)`}
      </div> */}
      </div>
        </RowFlex>
            </Div>
         </RowFlex>
        </div>
        <div className={"col sm-12 md-12 lg-12 margin-top-10"}>
        <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
            {`Number Of Children:`}
          </label>
          <Typography
          text={doc.numberofchildren ? doc.numberofchildren : ""}
          funcss='label border height-20 width-20 central round-edge'
          />
        </RowFlex>
        </div>
    
        <div className='col sm-12 md-12 lg-12 padding-5'>
          <label className='text-italic text-primary text-small text-bold'>
            {`Particulars Of Children `}
          </label>
          <Table funcss='text-smaller border round-edge' stripped>
            <TableHead>
              <TableData>Name</TableData>
              <TableData>Date Of Birth</TableData>
              <TableData>Educational Institution</TableData>
            </TableHead>
            <tbody>
              <TableRow>
                <TableData>{doc.firstchildname ? doc.firstchildname : ''}</TableData>
                <TableData>{doc.firstchilddob ? doc.firstchilddob : ''}</TableData>
                <TableData>{doc.firstchildinstitution ? doc.firstchildinstitution : ''}</TableData>
              </TableRow>
              <TableRow>
                <TableData>{doc.secondchildname ? doc.secondchildname : ''}</TableData>
                <TableData>{doc.secondchilddob ? doc.secondchilddob : ''}</TableData>
                <TableData>{doc.secondchildinstitution ? doc.secondchildinstitution : ''}</TableData>
              </TableRow>
              <TableRow>
                <TableData>{doc.thirdchildname ? doc.thirdchildname : ''}</TableData>
                <TableData>{doc.thirdchilddob ? doc.thirdchilddob : ''}</TableData>
                <TableData>{doc.thirdchildinstitution ? doc.thirdchildinstitution :''}</TableData>
              </TableRow>
            </tbody>
          </Table>
          <div className="text-small">
   {`NOTE: Only one parent can claim relief in respect of each child subject to maximum of three (3) children
   `}
   </div>
        </div>
    
        <div className='col sm-12 md-12 lg-12 padding-5 '>

        <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
        {`Are you disabled:`}
          </label>
          <div>
           <RowFlex>
            <div>
             <RowFlex>
              <div>Yes:</div>
              <div>
              <input
          type='checkbox'
          checked={doc.isdisabled  ? true : false}
          />
              </div>
              </RowFlex>  
              
              </div>
            <div>
             <RowFlex>
              <div>No:</div>
              <div>
              <input
          type='checkbox'
          checked={!doc.isdisabled ? true : false }
          />
              </div>
              </RowFlex>  
              
              </div>
           </RowFlex>
          </div>
        </RowFlex>
        <div className="test-small">
          {`if yes then attach certificate from department of social welfare`}
        </div>
        </div>
    
        <div className="col lg-12 section padding border round-edge">
   <div className="h6 text-center underline">Declaration of Employer</div>
 <div className="text-small">
{ `
      I do hereby declare that the above information is to the best of my knowledge and belief True, Correct and Complete
      `}
 </div>
    <RowFlex funcss='margin-top-10' justify='space-between'>
        <div>
          <div className="bb width-100"></div>
          <div className='text-secondary text-italic text-small text-center text-bold'>Signature Of Employer</div>
        </div>
        <div>
          <div className="bb width-100"></div>
          <div className='text-secondary text-italic text-small text-center text-bold'>Declaration</div>
        </div>
        <div>
          <div className="bb width-100"></div>
          <div className='text-secondary text-italic text-small text-center text-bold'>Date</div>
        </div>
    </RowFlex>
    </div>
    
    <div className="col lg-12 section padding border round-edge">
     <div className="h6 text-center underline">Declaration of Employee</div>
    <Div>
        
        <RowFlex gap='0.2rem'>
        <label className='text-italic text-primary text-small text-bold'>
        {`Do you have any other sources of income than your employment?`}
          </label>
          <div>
           <RowFlex>
            <div>
             <RowFlex>
              <div>Yes:</div>
              <div>
              <input
          type='checkbox'
          checked={doc.employeeverify  ? true : false}
          />
              </div>
              </RowFlex>  
              
              </div>
            <div>
             <RowFlex>
              <div>No:</div>
              <div>
              <input
          type='checkbox'
          checked={!doc.employeeverify ? true : false }
          />
              </div>
              </RowFlex>  
              
              </div>
           </RowFlex>
          </div>
        </RowFlex>
    </Div>
    <div className="text-small">
   {`I certify that the information given by the employer is correct, 
   The above employment is my primary employment and no other Tax Reflief Card is isseud or will be issued for this year
   `}
   </div>
    <RowFlex funcss='margin-top-10' justify='space-between'>
        <div>
          <div className="bb width-100"></div>
          <div className='text-secondary text-italic text-small text-center text-bold text-center'>Signature OF Employer</div>
        </div>
     
        <div>
          <div className="bb width-100"></div>
          <div className='text-secondary text-italic text-small text-center text-bold text-center'>Date</div>
        </div>
    </RowFlex>

    </div>
                    </Div>
                </Div> 
    
                <Div funcss="right">
                    <Div>
                    <div className="border  padding-5 central text-bold text-center text-small text-italic round-edge lighter" 
                     style={{width:'150px', height:"150px"}}>
                For first application <br />
                Insert a photo for identification of employee
              </div>
                    </Div>
                    <p />
                    <Div funcss="border padding-5 round-edge">
                        <div className="h6 text-center underline">For Official Use Only</div>
                        <p>
                            <div>
                                If age is over 60 years, Old age relief is granted amount of 
                            </div>
                            <div className="row-flex section" style={{alignItems:'flex-end' , gap:"0.3rem"}}>
                              <div>{`a)`}</div>
                              <div className="bb width-100"></div>
                            </div>
                        </p>
                        <p>
                            <div>
                                marriage relief granted an amount of
                            </div>
                            <div className="row-flex section" style={{alignItems:'flex-end' , gap:"0.3rem"}}>
                              <div>{`b)`}</div>
                              <div className="bb width-100"></div>
                            </div>
                        </p>
                        <p>
                            <div className=''>
                                Childrens eduction relief granted for <span className="border width-20 height-20 round-edge" style={{display:'inline-block', transform:"translateY(5px)"}}> {``} </span>
                                children amount of.
                            </div>
                            <div className="row-flex section" style={{alignItems:'flex-end' , gap:"0.3rem"}}>
                              <div>{`b)`}</div>
                              <div className="bb width-100"></div>
                            </div>
                        </p>
                        <p>
                            <div>
                        Qualify for disabled relief
                            </div>
                            <div className="row-flex section" style={{alignItems:'center' , gap:"0.3rem"}}>
                              <div>{`(10)`}</div>
                              <div className="">
                              <RowFlex>
            <div>
             <RowFlex>
              <div>Yes:</div>
              <div>
              <input
          type='checkbox'
          // checked={doc.isDisabled.trim().toLowerCase() == "yes" ? true : false}
          />
              </div>
              </RowFlex>  
              
              </div>
            <div>
             <RowFlex>
              <div>No:</div>
              <div>
              <input
          type='checkbox'
          // checked={doc.isDisabled.trim().toLowerCase() == "no" ? true : false}
          />
              </div>
              </RowFlex>  
              
              </div>
           </RowFlex>
                              </div>
                            </div>
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
                          {`(7) Total`}
                            </div>
                            <div className="row-flex section" style={{alignItems:'flex-end' , gap:"0.3rem"}}>
                              <div>{`GH₵`}</div>
                              <div className="bb width-100"></div>
                            </div>
                        </p>
                        <p>
                            <div>
                        Divided by <span className="width-50 bb" style={{display:'inline-block'}}></span> monthly deduction
                            </div>
                            <div className="row-flex section" style={{alignItems:'flex-end' , gap:"0.3rem"}}>
                              <div>{`(8) GH₵`}</div>
                              <div className="bb width-100"></div>
                            </div>
                        </p>
                        <p>
                            <div>
                        First Deductable Month
                            </div>
                            <div className="row-flex section" style={{alignItems:'flex-end' , gap:"0.3rem"}}>
                              <div>{`(9)`}</div>
                              <div className="bb width-100"></div>
                            </div>
                        </p>
                        <p>
                            <div className='text-italic'>
                        All the information have been transferred to the TRC
                            </div>
                        </p>
                        <p className='text-center'>
                            <div className='bb' />
                            <div>Signature, Date</div>
                        </p>
                    </Div>
                </Div> 
            </Div>
          </div>
        </div>
      )
}else{
    return "ddd"
}
}
