"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customerservice_1 = require("./services/customerservice");
let customerService = new customerservice_1.CustomerService();
for (let item of customerService) {
    console.log(item.toString());
}
// let iterator = customerService[Symbol.iterator]();
// while (true) {
//     let item = iterator.next();
//     if (item.done) { break; }
//     console.log('Item fetched ... ' + item.value.toString());
// }
//# sourceMappingURL=index.js.map