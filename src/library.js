// import axios from "axios";
// import _ from 'lodash';
// _.shuffle
// console.log(_.shuffle([1,2,3,4]));
var myApp;
(function (myApp) {
    var hello = 'hello in namespace';
    myApp.name = 'jhon';
})(myApp || (myApp = {}));
// const hello = 'hello';
var hello = myApp.name;
