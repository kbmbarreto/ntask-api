const https = require('https');
const fs = require('fs');

const certs = {
    key: fs.readFileSync('server.key', 'utf8'),
    cert: fs.readFileSync('server.crt', 'utf8')
};

module.exports = app => {
    async function start(port) {
        try {
            await app.db.authenticate();
            await app.db.sync();
            if(process.env.NODE_ENV !== 'test') {
                const server = https.createServer(certs, app);
                server.listen(port, () => {
                    console.log(`NTask API - porta ${port}`);
                });
            }
        } catch (ex) {
            console.log('Erro de conexão com o banco de dados.');
            console.error(ex);
        }
    }
    start(app.get('port'));
}
