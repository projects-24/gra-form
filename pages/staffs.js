import React, { useEffect, useState } from 'react'
import {FunRequest} from 'funuicss/js/Fun'
import Modal from 'funuicss/component/Modal'
import ModalHeader from 'funuicss/component/ModalHeader'
import CloseModal from 'funuicss/component/CloseModal'
import ModalContent from 'funuicss/component/ModalContent'
import ModalAction from 'funuicss/component/ModalAction'
import {FunGet} from 'funuicss/js/Fun'
import FunLoader from 'funuicss/component/FunLoader';
import SuccessModal from '../components/Modals/SuccessModal';
import InfoModal from '../components/Modals/InfoModal';
import Table from 'funuicss/component/Table'
import TableHead from 'funuicss/component/TableHead'
import TableData from 'funuicss/component/TableData'
import TableRow from 'funuicss/component/TableRow'
import IconicInput from 'funuicss/component/IconicInput'
import Input from 'funuicss/component/Input'
import Icon from 'funuicss/component/Icon'
import Typography from 'funuicss/component/Typography'
import { EndPoint } from './../components/EndPoint';
import RowFlex  from 'funuicss/component/RowFlex';
import Circle from 'funuicss/component/Circle'
import Button from 'funuicss/component/Button'
import PrintSheet from './print_data'
export default function Staffs() {
    const [docs, setdocs] = useState("")
    const [search, setsearch] = useState("")
    const [print, setprint] = useState(false)
    const [loading, setloading] = useState(false)
    const [success, setsuccess] = useState("")
    const [info, setinfo] = useState("")
    const [printDoc, setprintDoc] = useState("")
    useEffect(() => {
   if(!docs){
    FunRequest.get(EndPoint + "/employee")
    .then(res=>{
        setdocs(res)
        console.log(res)
    })
    .catch(err=>console.log(err))
   }
    })

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
  return (
    <div>
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
{
    printDoc ? <PrintSheet doc={printDoc}/> :''
}
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
      <div className=" fit center" style={{maxWidth:"1200px"}}>
        <div className="tableCard">
           <div className="section">
           <RowFlex gap="3rem">
           <Input
        label="Surname | OtherNames"
        fullWidth
        funcss="lineSearch"
        onChange={(e)=>setsearch(e.target.value)}
        />
            <div>
            <div>
        <Typography
        text='records'
        italic 
        color='primary'
        />
        <div />
        <div className='h2'>
            
        {
            docs &&
               docs
               .filter(fDoc =>{
                 if(!search){
                     return docs
                 }else if(
                    search.toString().trim().toLowerCase().includes(fDoc.employeesurname.toString().toLowerCase().trim().slice(0 , search.length))
                    || search.toString().trim().toLowerCase().includes(fDoc.othernames.toString().toLowerCase().trim().slice(0 , search.length))
                    ){
                         return fDoc
                 }
               }).length
        }
        </div>
      </div>
            </div>
           </RowFlex>
           </div>
        <Table  stripped funcss=" text-small table round-edge" bordered>
       <TableHead>
       <TableData>employeeSurname</TableData>
<TableData>otherNames</TableData>
<TableData>gender</TableData>
<TableData>dateOfBirth</TableData>
<TableData>motherMaidenName</TableData>
<TableData>socialSecurityNumber</TableData>
<TableData>taxFileNumber</TableData>
<TableData>employerName</TableData>
<TableData>Edit</TableData>
<TableData>Delete</TableData>


       </TableHead>
     {
      docs &&
      docs
      .filter(fDoc =>{
        if(!search){
            return docs
        }else if(
            search.toString().trim().toLowerCase().includes(fDoc.employeesurname.toString().toLowerCase().trim().slice(0 , search.length))
            || search.toString().trim().toLowerCase().includes(fDoc.othernames.toString().toLowerCase().trim().slice(0 , search.length))
            ){
                return fDoc
        }
      })
      .map(doc=>(
        <TableRow key={doc.id}>
<TableData>{doc.employeesurname}</TableData>
<TableData>{doc.othernames}</TableData>
<TableData>{doc.gender}</TableData>
<TableData>{doc.dateofbirth}</TableData>
<TableData>{doc.mothermaidenname}</TableData>
<TableData>{doc.socialsecuritynumber}</TableData>
<TableData>{doc.taxfilenumber}</TableData>
<TableData>{doc.employername}</TableData>
<TableData>
    <div onClick={()=>{
    setprint(true)
    setprintDoc(doc)
}}>
<Circle  bg={"success"} >
<Icon icon={"bx bx-printer"} />
</Circle>
    </div>

</TableData>
<TableData>
<Circle  bg={"light-danger"}>
<Icon icon="bx bx-trash-alt"  />
</Circle>
</TableData>


{/* <TableData>{doc.telephoneNumber}</TableData>
<TableData>{doc.taxId}</TableData> */}

        
    </TableRow>
      ))
     }
    </Table>
        </div>
      </div>
    </div>
  )
}
