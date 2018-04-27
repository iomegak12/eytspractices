const DELIMITER = ',';
const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';

class Customer {
    constructor(public id: number, public name: string,
        public address: string, public credit: number, public status: boolean) { }

    toString() {
        let formattedMessage =
            `${this.id}, ${this.name}, ${this.address}, ${this.credit}, ${this.status}`;

        return formattedMessage;
    }

    static create(csvString: string): Customer {
        if (!csvString) {
            throw new Error(INVALID_ARGUMENTS);
        }

        let splittedString: any[] = csvString.split(DELIMITER);
        let customer = new Customer(
            splittedString[0], splittedString[1], splittedString[2],
            splittedString[3], splittedString[4]
        );

        return customer;
    }
}

export { Customer };
