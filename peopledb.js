const faker = require('faker');
const fs = require('fs')

function generateUsers() {

  let users = []

  for (let id = 1; id <= 100; id++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let phoneNumber = faker.phone.phoneNumber();

    users.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "phoneNumber": phoneNumber
    });
  }

  return { "data": users }
}

let dataObj = generateUsers();

fs.writeFileSync('people.json', JSON.stringify(dataObj, null, '\t'));