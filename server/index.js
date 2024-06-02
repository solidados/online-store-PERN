import dotenv from 'dotenv';
import express from 'express';
import sequelize from './db.js';
// import models from './models/models.js';
import cors from 'cors';
import router from './routes/index.js';
import errorHandler from './middleware/ErrorHandlingMiddleware.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

// Error handler (the last Middleware)
app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate(); /** this is to connect to my DB */
    await sequelize.sync(); /** this will sync my DB with DB schema for any changes */
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error(error.message);
  }
};

start().catch(error => console.error(error));
