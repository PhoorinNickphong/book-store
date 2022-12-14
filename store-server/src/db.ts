import knex from 'knex'
import appConfig from './config'
const knexStringcase = require('knex-stringcase')

const db = knex(knexStringcase({
    client:'mysql',
    connection: appConfig.dbConnectionInfo,
    useNullAsDefault: true,
}))

export default db
