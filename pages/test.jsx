import React from 'react'
import PrintSheet from './print_data'

export default function test() {
    const data = {
        "employeeSurname": "Iddris Abdul Wahab",
        "otherNames": "abdul",
        "gender": "Male",
        "dateOfBirth": "2023-08-05",
        "motherMaidenName": "habiba",
        "socialSecurityNumber": "094848",
        "taxFileNumber": "4444",
        "employerName": "Abdul Wahab",
        "employerAddress": "Wa, Zongo",
        "telephoneNumber": "0257107168",
        "taxId": "4566",
        "changesInPersonal": "True",
        "maritalStatus": "Married",
        "dependentSpouse": "Jane Deo",
        "spouseDateOfBirth": "2023-08-11",
        "spouseTaxtFileNumber": "4455",
        "spouseSocialSecurityNumber": "4225",
        "spouseTaxId": "5665",
        "numberOfChildren": "4",
        "firstChildName": "Abdul Wahab",
        "firstChildDob": "2023-08-23",
        "firstChildInstitution": "Ghana",
        "secondChildName": "Iddris Abdul wahab",
        "secondChildDob": "",
        "secondChildInstitution": "ssf",
        "thirdChildName": "wahab Abdul",
        "thirdChildDob": "2023-08-10",
        "thirdChildInstitution": "tamale",
        "isDisabled": "No",
        "employeeVerify": "Yes"
    }
  return (
    <div className='width-900-max center'>
      <PrintSheet doc={data} />
    </div>
  )
}
