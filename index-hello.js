"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("./models/customer");
try {
    let customerCsvString = '10,Northwind Traders,Bangalore,12000,true';
    let customer = customer_1.Customer.create(customerCsvString);
    console.log(`Formatted Output ${customer.toString()} ...`);
}
catch (error) {
    console.log(`Error Occurred, Details : ${JSON.stringify(error)}`);
}
//# sourceMappingURL=index-hello.js.map