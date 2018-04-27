import { ICustomerService } from "./services/icustomerservice";
import { CustomerService } from "./services/customerservice";

let customerService = new CustomerService();

for (let item of customerService) {
    console.log(item.toString());
}

// let iterator = customerService[Symbol.iterator]();

// while (true) {
//     let item = iterator.next();

//     if (item.done) { break; }

//     console.log('Item fetched ... ' + item.value.toString());
// }