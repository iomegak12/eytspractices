"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = require("../models/customer");
const DEFAULT_TIMEOUT = 4000;
const MIN_SEARCH_LENGTH = 4;
const INVALID_SEARCH_LENGTH = 'Invalid Search String Length Specified!';
const MIN_FIND_POS = 0;
class CustomerService {
    constructor() {
        this.customers = [];
        this.customers =
            [
                new customer_1.Customer(11, 'Northwind Traders', 'Bangalore', 12000, true),
                new customer_1.Customer(12, 'Southwind Traders', 'Mumbai', 12000, true),
                new customer_1.Customer(13, 'Westwind Traders', 'Chennai', 32000, true),
                new customer_1.Customer(14, 'Eastwind Traders', 'Bangalore', 12000, true),
                new customer_1.Customer(15, 'Oxyrich Traders', 'Trivandrum', 42000, true),
                new customer_1.Customer(16, 'Footmart', 'Mysore', 12000, false)
            ];
    }
    getCustomers() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.customers);
            }, DEFAULT_TIMEOUT);
        });
        return promise;
    }
    findCustomers(customerName) {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let validation = customerName && customerName.length >= MIN_SEARCH_LENGTH;
                if (!validation) {
                    reject({
                        status: false,
                        reason: INVALID_SEARCH_LENGTH
                    });
                    return;
                }
                let filteredCustomers = this.customers.filter(customer => customer.name.indexOf(customerName) >= MIN_FIND_POS);
                resolve(filteredCustomers);
            }, DEFAULT_TIMEOUT);
        });
        return promise;
    }
    *[Symbol.iterator]() {
        for (let customer of this.customers) {
            yield customer;
        }
    }
}
exports.CustomerService = CustomerService;
//# sourceMappingURL=customerservice.js.map