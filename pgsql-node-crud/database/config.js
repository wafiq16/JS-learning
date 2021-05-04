const { Client } = require("pg");
const client = new Client({
    connectionString: "postgres://sgairkwxevnrlg:68090ac27efa8d47f3232ae47885c69c5b0332c65832822110179ecb7f4c2ba4@ec2-52-45-73-150.compute-1.amazonaws.com:5432/d65snq8pe6r4qg"
});

client.connect();

module.exports = client;