import { config } from 'dotenv';
import { app } from './app/app.js';

config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
