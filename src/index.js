const logger = require('./utils/logger')
const users = require('./users')
const faker = require('faker')

const allUsers = async () => {
  const allUsers = await users().getAll()

  console.log('\n### All Users ###')
  console.log('All Users: ', allUsers)
  return allUsers
}

const userById = async (id) => {
  const userById = await users().getById(id)

  console.log('\n### User By Id ###')
  console.log('User By Id: ', userById)
  return userById
}

const userByEmail = async () => {
  const userByEmail = await users().getByEmail('Cornell11@gmail.com')

  console.log('\n### User By Email ###')
  console.log('User By Email: ', userByEmail)
  return userByEmail
}

const userCreated = async () => {
  const user = {
    name: faker.name.findName(),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password(25)
  }
  console.log('\n### Users Created ###')
  console.log('User in userCreated():', user)

  const userCreated = await users().create(
    user.name,
    user.email,
    user.password,
    'user'
  )

  console.log('UserCreated: ', userCreated)
  return userCreated
}

const userUpdated = async (userInjected) => {
  if (userInjected.length > 0) {
    let userUpdated = null
    const [user] = userInjected

    console.log('\n### Users Updated ###')
    console.log('Injected Id in userUpdated: ', user.id)

    userUpdated = await users().update(
      user.id,
      user.name,
      user.email,
      faker.internet.password(25),
      'root'
    )

    console.log('UserUpdated: ', userUpdated)
  }
}

logger.info('Application Running...')

allUsers()
userById(1)
userByEmail()
userCreated()
userCreated().then((result, err) => {
  if (err) {
    throw err
  }
  userById(result.insertId).then((result, err) => {
    if (err) {
      throw err
    }

    userUpdated(result)
  })
})
