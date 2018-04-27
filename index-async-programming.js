"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const customerservice_1 = require("./services/customerservice");
function process() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let customerService = new customerservice_1.CustomerService();
            let windPromise = customerService.findCustomers('wind');
            let richPromise = customerService.findCustomers('rich');
            let combinedResults = yield Promise.all([windPromise, richPromise]);
            for (let promiseResult of combinedResults) {
                for (let customer of promiseResult) {
                    console.log(customer.toString());
                }
                console.log('-------------------------------');
            }
        }
        catch (error) {
            console.error(`Error Occurred, Details : ${JSON.stringify(error)}`);
        }
        return true;
    });
}
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        let status = yield process();
        console.log('This line would be printed very immediately ... ' +
            ' as process() function is an async. function .... ' + status);
    });
})();
//# sourceMappingURL=index-async-programming.js.map