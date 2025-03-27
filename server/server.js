import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
    res.send('Hello from backend!');
});

app.listen(5000, () => console.log(`Server running on port 5000`));
