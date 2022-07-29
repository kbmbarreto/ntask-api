module.exports = app => {
    app.get('/v1', (req, res) => {
        res.json({status: 'NTask API'});
    });
};
