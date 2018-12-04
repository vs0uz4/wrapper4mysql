'use strict'

const { query } = require('./mysql/setup')

const init = () => {
  const getAll = async () => {
    const { results } = await query(
      `SELECT
          id,
          name,
          email,
          role
        FROM
          users
        LIMIT 5`
    )

    return results
  }

  const getById = async (id) => {
    if (id) {
      const { results } = await query(
        `SELECT
            id,
            name,
            email,
            role
          FROM
            users
          WHERE
            id = ?`,
        [id]
      )

      return results
    } else {
      throw new Error('Id of user is not defined')
    }
  }

  const getByEmail = async (email) => {
    if (email) {
      const { results } = await query(
        `SELECT
            id,
            name,
            email,
            role
          FROM
            users
          WHERE
            email = ?
          LIMIT 1`,
        [email]
      )

      return results
    } else {
      throw new Error('Email of user is not defined')
    }
  }

  const create = async (name, email, passwd, role) => {
    if (name && email && passwd && role) {
      const { results } = await query(
        `SELECT
            id,
            name,
            email,
            role
          FROM
            users
          WHERE
            email = ?
          LIMIT 1`,
        [email]
      )

      if (results.length === 0) {
        const { results } = await query(
          `INSERT INTO
            users (
              name,
              email,
              passwd,
              role
            ) VALUES (
              ?,
              ?,
              ?,
              ?)`,
          [name, email, passwd, role]
        )

        return results
      }
    } else {
      throw new Error(
        'Name, Email, Password or Role params of user is not defined'
      )
    }
  }

  const update = async (id, name, email, passwd, role) => {
    if (name && email && passwd && role) {
      const { results } = await query(
        `SELECT
            id,
            name,
            email,
            role
          FROM
            users
          WHERE
            id = ?`,
        [id]
      )

      if (results.length > 0) {
        const { results } = await query(
          `UPDATE
            users
          SET
            name = ?,
            email = ?,
            passwd = ?,
            role = ?
          WHERE
            id = ?`,
          [name, email, passwd, role, id]
        )

        return results
      }
    } else {
      throw new Error(
        'Name, Email, Password or Role params of user is not defined'
      )
    }
  }

  const destroy = async (id) => {
    if (id) {
      const { results } = await query(
        `SELECT
            id,
            name,
            email,
            role
          FROM
            users
          WHERE
            id = ?`,
        [id]
      )

      if (results.length === 0) {
        const { results } = await query(
          `DELETE
            FROM
              users
            WHERE
              id = ?`,
          [id]
        )

        return results
      }
    } else {
      throw new Error('Id of user is not defined')
    }
  }

  return { getAll, getById, getByEmail, create, update, destroy }
}

module.exports = init
