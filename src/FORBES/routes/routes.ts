import express from 'express';
const router = express.Router();

import PostApi from '../controllers/PostApi';
import GetApi from '../controllers/GetApi';
import GetByIdApi from '../controllers/GetByIdApi';
import PutApi from '../controllers/PutApi';
import DelApi from '../controllers/DelApi';

// Middleware to parse JSON requests
router.use(express.json());

// Routes for the Forbes API
router.post('/forbes', PostApi);       // Create
router.get('/forbes', GetApi);         // Read all
router.get('/forbes/:id', GetByIdApi); // Read by ID
router.put('/forbes/:id', PutApi);         // Update
router.delete('/forbes/:id', DelApi);      // Delete

export default router;
