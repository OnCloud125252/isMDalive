import express from 'express';
import cors from 'cors';
import { data } from './functions/data.js';

const app = express();
const port = 3000;

app.use(cors());

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}/api`);
    console.log('Avilible path :');
    console.table([['home', '明道中學首頁'], ['login', '明道雲端平台'], ['junior', '國中部首頁'], ['senior', '高中部首頁'], ['compre', '技高部首頁'], ['international', '國際部首頁'], ['library', '圖書館首頁'], ['order', '班級事務線上管理系統'], ['courses', '配排課管理系統']]);
});

app.get('/api/:name', (req, res) => {
    const params = req.params.name.toString();
    data(params).then(opt => {
        res.status(200).json(opt);
    });
});