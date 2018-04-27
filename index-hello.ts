import { Customer } from "./models/customer";

try {
    let customerCsvString = '10,Northwind Traders,Bangalore,12000,true';
    let customer = Customer.create(customerCsvString);

    console.log(`Formatted Output ${customer.toString()} ...`);
} catch (error) {
    console.log(`Error Occurred, Details : ${JSON.stringify(error)}`);
}