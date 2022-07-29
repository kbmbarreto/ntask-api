module.exports = {
    db: {
        database: 'ntask',
        username: 'root',
        password: 'Dev2020@',
        params: {
            dialect: 'mysql',
            define: {
                underscored: true
            }
        }
    },
    jwt: {
        secret: 'Nta$K-AP1',
        options: { session: false }
    }
};
