
import { URLSearchParams, URL } from 'url'

//test data sets
const dataSets = [
    {
      firstname: "TestData1",lastname: "Customer1"
       },
    {
        firstname: "TestData1",lastname: "Customer1"
    }
  ];

// Convert the array to a JSON string
const body = JSON.stringify(dataSets);
const headers = {}

export async function select(){
    const test =  await fetch("{endpointCustomerSelect}", {
     "headers": headers,
     "body": body,
     "method": "POST"
   }); ;
console.log(await test.text())
}

export async function customerCreation(){
// Define the data sets as an array of objects
 const test =  await fetch("{endpointCustomerCreation}", {
        "headers": headers,
        "body": body,
        "method": "POST",
      });
console.log(await test.text())
}

export async function CardCreation(){
    const test =  await fetch("{endpointCardCreation}", {
        "headers": headers,
        "body": body,
        "method": "POST",
      });
console.log(await test.text())
 }
 
export async function ActivityCreation(){
const test =  await fetch("{endpointActivityCreation}", {
        "headers": headers,
        "body": body,
      });
console.log(await test.text())
}

