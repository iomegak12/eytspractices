"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customerservice_1 = require("./services/customerservice");
try {
    let customerService = new customerservice_1.CustomerService();
    let searchString1 = 'wind';
    let searchString2 = 'rich';
    let windPromise = customerService.findCustomers(searchString1);
    let richPromise = customerService.findCustomers(searchString2);
    let combinedPromise = Promise.all([windPromise, richPromise]);
    combinedPromise.then(results => {
        for (let promiseResult of results) {
            for (let customer of promiseResult) {
                console.log(customer.toString());
            }
            console.log('-------------------------------');
        }
    }, error => {
        console.log(`One of the Promises Failed, Details : ${JSON.stringify(error)}`);
    });
}
catch (error) {
    console.log(`Error Occurred, Details : ${JSON.stringify(error)}`);
}
//# sourceMappingURL=index-promises.js.map