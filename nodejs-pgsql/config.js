const env = process.env;

const config = {
    db: {
        host: /*env.DB_HOST ||*/ 'queenie.db.elephantsql.com',
        port: /*env.DB_PORT ||*/ '5432',
        user: /*env.DB_USER || */ 'jxtppaaz',
        password: /*env.DB_PASSWORD ||*/ 'QiqCAhxcTyDYAURtb2nr2Ql5QrM_om4M',
        database: /*env.DB_NAME ||*/ 'jxtppaaz',
        ssl: true,
    },
    listPerPage: 10,
};

module.exports = config;