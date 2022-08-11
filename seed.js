
const { faker } = require("@faker-js/faker")
const { PrismaClient } = require("@prisma/client")

const User = new PrismaClient().User;

const numberOfUsers = 3
module.exports = async function seedFunction() {
  await User.deleteMany();

  let users = []
  for (let index = 0; index < numberOfUsers; index++) {
    let user = {
      cin: faker.datatype.uuid(),
      firstName: faker.name.findName(),
      lastName: faker.name.findName(),
      age: Math.floor(Math.random() * 10 + 1),
      className: faker.internet.domainName(),
    }
    const newUser = await User.create({
      data: user,
    })
    users.push(newUser)
  }
}