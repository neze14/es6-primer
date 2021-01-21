import logger from './tools.js'

//array map illustration
const addressees = ["John Uzo", "Mary Smart", "Paul Umoh"]; //array with elements.

addressees.map(addressee => {
    let message = `Dear ${addressee},
    It is my pleasure to inform you that your admission letter is ready for collection
    `;
    logger(message);
});

addressees.map(
    addressee => {
        let message = `Dear ${addressee},
        It is my pleasure to inform you that your admission letter is ready for pick up
        
        Thank you
        Yours truly
        Admissions Manager
        `
        logger(message)
    }
)