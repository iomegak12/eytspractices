import { ICustomerService } from "./icustomerservice";
import { Customer } from "../models/customer";

const DEFAULT_TIMEOUT = 4000;
const MIN_SEARCH_LENGTH = 4;
const INVALID_SEARCH_LENGTH = 'Invalid Search String Length Specified!';
const MIN_FIND_POS = 0;

class CustomerService implements ICustomerService {
    private customers: Customer[] = [];

    constructor() {
        this.customers =
            [
                new Customer(11, 'Northwind Traders', 'Bangalore', 12000, true),
                new Customer(12, 'Southwind Traders', 'Mumbai', 12000, true),
                new Customer(13, 'Westwind Traders', 'Chennai', 32000, true),
                new Customer(14, 'Eastwind Traders', 'Bangalore', 12000, true),
                new Customer(15, 'Oxyrich Traders', 'Trivandrum', 42000, true),
                new Customer(16, 'Footmart', 'Mysore', 12000, false)
            ];
    }

    getCustomers(): Promise<Customer[]> {
        let promise = new Promise<Customer[]>((resolve, reject) => {
            setTimeout(() => {
                resolve(this.customers);
            }, DEFAULT_TIMEOUT);
        });

        return promise;
    }

    findCustomers(customerName: string): Promise<Customer[]> {
        let promise = new Promise<Customer[]>((resolve, reject) => {
            setTimeout(() => {
                let validation = customerName && customerName.length >= MIN_SEARCH_LENGTH;

                if (!validation) {
                    reject({
                        status: false,
                        reason: INVALID_SEARCH_LENGTH
                    });

                    return;
                }

                let filteredCustomers = this.customers.filter(
                    customer => customer.name.indexOf(customerName) >= MIN_FIND_POS);

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

export { CustomerService };
