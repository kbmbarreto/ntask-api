const express = require('express')

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.json({status: 'Ntask API'});
});

app.listen(PORT, () => {
    console.log(`Ntask API - porta ${PORT}`);
});
