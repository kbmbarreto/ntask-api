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
        .get(async (req, res) => {
            try {
                const {id} = req.params;
                const result = await Tasks.findOne({where});
                if(result) {
                    res.json(result);
                } else {
                    res.sendStatus(404);
                }
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .put(async (req, res) => {
            try {
                const {id} = req.params;
                const where = {id};
                await Tasks.update(req.body, {where});
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        })
        .delete(async (req, res) => {
            try {
                const {id} = req.params;
                const where = {id};
                await Tasks.destroy({where});
                res.sendStatus(204);
            } catch (ex) {
                res.status(412).json({msg: ex.message});
            }
        });
};
