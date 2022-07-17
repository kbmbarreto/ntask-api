module.exports = app => {
    async function start(port) {
        try {
            await app.db.authenticate();
            await app.db.sync();
            app.listen(port, () => {
                console.log(`NTask API - porta ${port}`);
            });
        } catch (ex) {
            console.log('Erro de conexão com o banco de dados.');
            console.error(ex);
        }
    }
    start(app.get('port'));
}
