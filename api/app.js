import express from 'express';
import { data } from './functions/data.js';

const app = express();
const port = 3000;

app.get('/api/:name', (req, res) => {
    const params = req.params.name.toString();
    data(params).then(opt => {
        res.status(200).json(opt);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});