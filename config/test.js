module.exports = {
    db: {
        database: 'ntask_test',
        username: 'root',
        password: 'Dev2020@',
        params: {
            dialect: 'mysql',
            logging: false,
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
