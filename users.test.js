const axios = require('axios');
const Users = require('./users');

// Mock the module
jest.mock('axios');

test('should fetch users', () => {

    const users = [{
        "id": 1,
        "first_name": "Robert",
        "last_name": "Schwartz",
        "email": "rob23@gmail.com"
    }, {
        "id": 2,
        "first_name": "Lucy",
        "last_name": "Ballmer",
        "email": "lucyb56@gmail.com"
    }];

    const resp = { data : users };
    
    // Mock the server response
    axios.get.mockImplementation(() => Promise.resolve(resp));

    // Given
    Users.
    // When
    all().
    // Then
    then(resp => expect(resp.data).toEqual(users));
});
