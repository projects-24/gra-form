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
import Div  from 'funuicss/component/Div';
export default function Staffs() {
    const [docs, setdocs] = useState("")
    const [search, setsearch] = useState("")
    const [print, setprint] = useState(false)
    const [loading, setloading] = useState(false)
    const [success, setsuccess] = useState("")
    const [info, setinfo] = useState("")
    const [printDoc, setprintDoc] = useState("")
    const [user, setuser] = useState('')
    const [deleteStaff, setdeleteStaff] = useState(false)

    useEffect(() => {
    if(sessionStorage.getItem("user")){
      setuser(true)
    }
    }, [user])
    
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

    const HandleDelete = ()=>{
      setloading(true)
      FunRequest.delete(EndPoint + "/employee/" + deleteStaff)
      .then(res=>{
        setsuccess({title:"Deleted" , message:"Object deleted"})
        setdeleteStaff("")
        setdocs("")
      })
      .catch((err)=>{
        setinfo({title:"Error" , message:JSON.stringify(err)})
        setdeleteStaff("")
      })
    }

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
      const Login = ()=>{
        let email , password 
        email = FunGet.val("#email") 
        password = FunGet.val("#password") 

        if(email == "admin@gra.com" && password == "admin123"){
          new Promise((resolve, reject) => {
            sessionStorage.setItem("user" , true)
            resolve()
          })
          .then(()=>{
            setuser(true)
          })
        }
      }
      if(user){
        return (
          <div>

            {
              deleteStaff &&
              <Modal 
animation="ScaleUp" 
duration={0.4} 
open={true}
backdrop
maxWidth="500px"
>

<ModalContent funcss="padding-20">
    <RowFlex gap="2rem">
        <Div>
        <Div funcss="avatar light-warning" width="40px" height="40px">
        <Icon icon="bx bx-info-circle"  />
        </Div>
        </Div>
        <Div>
            <Typography
            text={"Delete Data"}
            heading="h5"
            block
            />
            <Typography
            color="secondary"
            text={"This will delete the data from our records"}
            block
            />
        </Div>

    </RowFlex>
</ModalContent>
<ModalAction>
  <Button onClick={()=>setdeleteStaff('')} bg="light" startIcon={<i className='bx bx-check' />}>No</Button>
  &nbsp;
  &nbsp;
  &nbsp;
  <Button onClick={HandleDelete} bg="danger" startIcon={<i className='bx bx-trash-alt' />}>Yes</Button>
</ModalAction> 
</Modal>
            }
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
      <TableData>Print</TableData>
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
        <div onClick={()=>setdeleteStaff(doc.id)}> 
        <Circle  bg={"light-danger"}>
      <Icon icon="bx bx-trash-alt"  />
      </Circle>
        </div>

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
      }else{
        return (
          <div className="form_container">
            <div className="login_form">
              <p>
                <Typography
                text="Login Account"
                heading="h2"
                lighter
                />
                <div />
                <Typography
                text="Enter the correct email and password to login."
                />
              </p>
              <div className="margin-top-20"></div>
            <Input
              label="Email"
              fullWidth
              funcss="lineSearch"
               id="email"
              />
              <div className="margin-top-20"></div>
       
            <Input
              label="Password"
              fullWidth
              funcss="lineSearch"
               id="password"
              />
               <div className="margin-top-30"></div>
               <Button
               text="Login Account"
               fullWidth
               bg="primary"
               onClick={Login}
               />
            </div>
          </div>
        )
      }
  
}
