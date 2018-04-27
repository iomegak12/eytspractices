import { Customer } from "../models/customer";

interface ICustomerService {
    getCustomers(): Promise<Customer[]>;
    findCustomers(customerName: string): Promise<Customer[]>;
}

export { ICustomerService };
