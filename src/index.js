import logger, {
    appName, dummyFunction, genericFunction, 
    multiplier, multiplier2, genericFunction2, Person,
    CustomMath, User
} from './tools.js';
import fetch from 'node-fetch';

logger("Welcome! We are having fun with modularity in JS");

//logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction() );
/*Introducing Template literals**/

logger(`Welcome! The application name is "${appName}". There is a function that returns "${dummyFunction()}".`);

logger(genericFunction());

logger(multiplier(10));

try {
    const product = multiplier2(3);
    logger(product);
}catch(error) {
    logger(error.message)
}

//logger(multiplier2(3, 4));

logger(genericFunction2(2,3,4,6,8,9,10,5,12));

let person1 = new Person("Chineze", "Okadigbo", "Female", undefinded);
let person2 = new Person("Harry", "Potter", "Male", 1.7);

logger(person1.firstName);
logger(person2.firstName);

logger('The initial height of ${person1.firstName} is ${person1.height}');
person1.height = 1.7;
logger('The new height of ${person1.firstName} is ${person1.height}');

logger((CustomMath.sqrt(1000)));

let user1 = new User("myusername", "mypassword", "Chineze", "Okadigbo", "female", undefined);
logger('The username of ${user1.firstname} is ${user1.username}');

/** Preliminary iluustration of callback function in asynchronous programming, using setTimeout() */
// simple asynchronous programming using callback function
setTimeout(() => {
    logger('Timeout is over')
    },
    3000 //set timeout for 3000ms i.e 3 seconds
)

logger('This statement is after the setTimeout call');

/**Promises */
new Promise((resolve, reject) => {
    setTimeout(()=>{
    resolve("Timeout is over"); //send out a success feedback with data using resolve
    }, 1000) //set timeout for 1000ms i.e. 1second.
}).then((data) => {
    logger(`All Ok${data}`);//This should output "Timeout is over"
}).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
    logger(`Error message ${error}`);
}); 

let url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1
fetch(url)
    .then(response => response.json())// convert data returned to json
    .then(data => logger('Data: id= ${data.id}, Name = ${data.name}, Email = ${data.email}')) //use the json data
    .catch(error => logger('Error: ${error}'));

/* 
fetch(url)
    .then(response => response.json())
    .then(data => logger('Data: id= ${data.id}, Name = ${data.name}, Email = ${data.email}')) //use the json data
    .catch(error => logger('Error: ${err}'));
*/

/** Async/Await */
//first define your promise aware function
const promiseAwareTimeout = (milliseconds = 1000) => { //The function expects milliseconds to be passed. If not passed, milliseconds parameter defaults to 1000
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Timeout of ${milliseconds} milliseconds is over`); //send out a success feedback with data using resolve
        }, milliseconds) //set timeout for passed milliseconds. Defaults to 1000
    });
}

//define a function that uses our Promise executor
const usePromiseAwareTimeout = async (milliseconds) => {
    logger('About to call timeout');
    try {
        logger(await promiseAwareTimeout(milliseconds));
    } catch (error) {
        logger(error);
    }
};

//call the async function. 
usePromiseAwareTimeout(3000);

usePromiseAwareTimeout();


/**More illustration of async/await */
/**Need to use try/catch to ensure that error is handled in async/await */
const usersUrl = 'https://jsonplaceholder.typicode.com/users/';

const getUserById = async (userId = 1) => {

    let url = usersUrl + userId;

    try {
        const response = await fetch(url);
        const data = await response.json();
        /*
        The if statement below is to ensure that errors like URL not found (ie Error 404) is caught. fetch() unfortunately does not send a Promise.reject() in such a case.
        So here, we are throwing exception if HTTP response status is
        outside the OK range (the 2xx range are OK), so that it can be caught.
        */
        if (response.status >= 200 && response.status < 300) {
            logger(data.name); //do whatever you want with the data. You can even pass to other functions to do some work on it
        } else {
            throw Error(response.status);//make sure that the error is not ignored by the catch() statement below.
        }
    } catch (error) {
        logger(`Error: ${error}`);
    }
}

getUserById(2);

getUserById();

/** You can also use promise to call your async functions */
//lets do Promise.all
Promise.all([getUserById(0), getUserById(2), getUserById(3)]) //getUserById() is deliberately passed Id of 0 in the first case to provoke Error: 404.
    .then((data) => {
        logger(`User1 = ${!data[0] ? 'Error' : data[0].name}; User2 = ${data[1].name}; User3 = ${data[2].name}`);//display data from array
    })