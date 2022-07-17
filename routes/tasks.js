module.exports = app => {
    const Tasks = app.models.tasks;

    app.get('/tasks', async (req, res) => {
        try{
            const tasks = await Tasks.findAll();
            res.json({tasks});
        } catch (ex) {
            res.status(500).json(ex);
        }
    });
};
