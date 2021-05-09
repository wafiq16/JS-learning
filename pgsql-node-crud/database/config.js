const { Client } = require('pg');
const config = {
    db: {
        // host: 'ec2-52-45-73-150.compute-1.amazonaws.com',
        // port: '5432',
        // user: 'sgairkwxevnrlg',
        // password: '68090ac27efa8d47f3232ae47885c69c5b0332c65832822110179ecb7f4c2ba4',
        // database: 'd65snq8pe6r4qg',
        // url: 'postgres://sgairkwxevnrlg:68090ac27efa8d47f3232ae47885c69c5b0332c65832822110179ecb7f4c2ba4@ec2-52-45-73-150.compute-1.amazonaws.com:5432/d65snq8pe6r4qg',
        host: 'localhost',
        port: '5432',
        user: 'root',
        password: 'root',
        database: 'fishes',
        ssl: true,
    },
    listPerPage: 10,
    // connectionString: "postgres://sgairkwxevnrlg:68090ac27efa8d47f3232ae47885c69c5b0332c65832822110179ecb7f4c2ba4@ec2-52-45-73-150.compute-1.amazonaws.com:5432/d65snq8pe6r4qg",
};
const client = new Client({
    host: 'localhost',
    port: '5432',
    user: 'root',
    password: 'root',
    database: 'fishes',
    // ssl: true,
    // sslmode: require,
});
try {
    client.connect();
} catch (err) {
    //     return next(err);
    // console.log('error koneksi ' + err);
}
module.exports = client;