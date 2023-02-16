const sqliteConnection = require("../../sqlite");


const createsUsers = require("./createUsers");


async function migrationsRun (){
    const schemas = [
        createsUsers
    ].join('');

    sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error));
}


module.exports = migrationsRun;