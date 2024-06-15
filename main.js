const Validator = require('validator');

const data = {
    email: 'test@test.com, abcDE123',
    receiver: {
        email: 'invalid-email'
    }
};

const rules = {
    email: 'required|email',
    'receiver.email': 'required|email'
};

const messages = {
    required: 'Email adress contains unknown characters',
    email: 'Invalid Format',
    'receiver.email': 'The receiver email address is not valid'
};

const v = Validator.make(data, rules, messages);

if (v.passes()) {
    console.log('Pass');
} else {
    console.log('Error');
    console.log(v.getErrors());
}
