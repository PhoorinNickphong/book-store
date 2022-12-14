const check = process.env.NODE_ENV == 'production'
let appConfig = {
    check,
    clearDataBeforeLoadingFixture: check ? false:true,
    dbConnectionInfo : {
        host : '127.0.0.1',
        port : 3306,
        user : 'root',
        password : 'My_P@ssw0rd',
        database : 'store'
    }
}

export default appConfig
