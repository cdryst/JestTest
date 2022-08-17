const axios = require('axios');
const Users = require('./users');

test('should fetch users', () => {

    const users = 
[
  {
    "id": 1,
    "first_name": "Robert",
    "last_name": "Schwartz",
    "email": "rob23@gmail.com"
  },
  {
    "id": 2,
    "first_name": "Lucy",
    "last_name": "Ballmer",
    "email": "lucyb56@gmail.com"
  },
  {
    "id": 3,
    "first_name": "Anna",
    "last_name": "Smith",
    "email": "annasmith23@gmail.com"
  },
  {
    "id": 4,
    "first_name": "Robert",
    "last_name": "Brown",
    "email": "bobbrown432@yahoo.com"
  },
  {
    "id": 5,
    "first_name": "Roger",
    "last_name": "Bacon",
    "email": "rogerbacon12@yahoo.com"
  }
];

    // Given
    Users.
    // When
    all().
    // Then
    then(resp => expect(resp.data).toEqual(users));
});
