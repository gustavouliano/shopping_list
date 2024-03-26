import { usersRouter } from "./infra/routes/user-router";
import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
app.use('/users', usersRouter)

app.listen(3000, () => {
    console.log('Server running on port 3000')
});