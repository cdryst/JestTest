const axios = require('axios');
const Users = require('./users');

// Mock the module
jest.mock('axios');

test('should fetch users', () => {

    // Given
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
    // Mock the response
    axios.get.mockImplementation(() => Promise.resolve(resp));

    // When
    Users.all().
    // Then
    then(resp => expect(resp.data).toEqual(users));
});
