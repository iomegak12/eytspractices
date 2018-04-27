"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DELIMITER = ',';
const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';
class Customer {
    constructor(id, name, address, credit, status) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.credit = credit;
        this.status = status;
    }
    toString() {
        let formattedMessage = `${this.id}, ${this.name}, ${this.address}, ${this.credit}, ${this.status}`;
        return formattedMessage;
    }
    static create(csvString) {
        if (!csvString) {
            throw new Error(INVALID_ARGUMENTS);
        }
        let splittedString = csvString.split(DELIMITER);
        let customer = new Customer(splittedString[0], splittedString[1], splittedString[2], splittedString[3], splittedString[4]);
        return customer;
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map