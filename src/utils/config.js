'use strict'

/* eslint-disable no-process-env */
require('dotenv').config()

const environment = [
  'NODE_ENV',
  'DB_HOST',
  'DB_PORT',
  'DB_DATABASE',
  'DB_USERNAME',
  'DB_PASSWORD'
]

environment.forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`${name}: ${process.env[name]}`)
  }
})

const config = {
  app: {
    NODE_ENV: process.env.NODE_ENV || 'development'
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_DATABASE || 'example',
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'secret'
  }
}

module.exports = config
