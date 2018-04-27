import { ICustomerService } from "./services/icustomerservice";
import { CustomerService } from "./services/customerservice";

async function process() {
    try {
        let customerService: ICustomerService = new CustomerService();

        let windPromise = customerService.findCustomers('wind');
        let richPromise = customerService.findCustomers('rich');
        let combinedResults = await Promise.all([windPromise, richPromise]);

        for (let promiseResult of combinedResults) {
            for (let customer of promiseResult) {
                console.log(customer.toString());
            }

            console.log('-------------------------------');
        }
    } catch (error) {
        console.error(`Error Occurred, Details : ${JSON.stringify(error)}`);
    }

    return true;
}

(async function () {
    let status = await process();

    console.log('This line would be printed very immediately ... ' +
        ' as process() function is an async. function .... ' + status);
})();