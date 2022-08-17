const axios = require('axios');

const host = process.env.HOST || 'http://localhost:3000';

class Users {

     static async all() {
        let res = await axios.get(host+'/users');
        return res;
      }
}

module.exports = Users;
