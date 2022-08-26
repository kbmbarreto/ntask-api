const logger = require('../logger');

module.exports = {
    db: {
        database: 'ntask',
        username: 'root',
        password: 'Dev2020@',
        params: {
            dialect: 'mysql',
            logging: (sql) => {
                logger.info(`[${new Date()}] ${sql}`);
            },
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
