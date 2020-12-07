// import axios from "axios";
// import _ from 'lodash';
// _.shuffle
// console.log(_.shuffle([1,2,3,4]));

namespace myApp {
    const hello = 'hello in namespace';
    export const name = 'jhon';
    export interface Nameable {
        name: string;
    }
}
// const hello = 'hello';
// const hello = myApp.name;
let nameable: myApp.Nameable["name"];