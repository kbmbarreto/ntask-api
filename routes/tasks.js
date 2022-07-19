module.exports = app => {
    const Tasks = app.models.tasks;

    app.route('/tasks')
        .all((req, res, next) => {
            delete req.body.id;
            next();
        })
        .get(async (req, res) => {
            try {
                const result = await Tasks.findAll();
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .post(async (req, res) => {
            try {
                const result = await Tasks.create(req.body);
                res.json(result);
            } catch (ex) {
                res.status(412).json({msg: ex.message})
            }
        });

    app.route('/tasks/:id')
        .all((req, res, next) => {
            delete req.body.id;
            next();
        })
        .get((req, res) => {

        })
        .put((req, res) => {

        })
        .delete((req, res) => {

        });
};
