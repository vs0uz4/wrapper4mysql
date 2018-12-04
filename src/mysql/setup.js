'use strict'

const config = require('../utils/config')
const mysql = require('mysql')

const pool = mysql.createPool(
  Object.assign(config.database, {
    connectionLimit: 10,
    multipleStatements: true,
    rowsAsArray: false
  })
)

const conn = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        resolve(connection)
      }
    })
  })
}

const query = (q, data = []) => {
  return conn().then((connection) => {
    return new Promise((resolve, reject) => {
      connection.query(q, data, (err, results, fields) => {
        connection.release()
        if (err) {
          reject(err)
        } else {
          resolve({ results, fields })
        }
      })
    })
  })
}

module.exports = {
  pool,
  conn,
  query
}
