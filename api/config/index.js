module.exports = {
    secret: 'my-super-secret',
    private_bdd : {
        host : 'localhost',
        dialect : 'mysql',
        dbname : 'my_corp_guardian_public',
        user : 'root',
        password : '',
        port : 3306
    },
    general_bdd : {
        host : 'localhost',
        dialect : 'mysql',
        dbname : 'my_corp_guardian_general',
        user : 'root',
        password : '',
        port : 3306
    }
}
