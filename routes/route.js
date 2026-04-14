const express = require('express');
const taskController = require('../controlers/taskControlers.js');

const router = express.Router();

router
  .route('/')
  .get(taskController.getTask)
  .post(taskController.createTask);

router
  .route('/:id')
  .get(taskController.getSpecificTask)
  .patch(taskController.updateSpecificTask)
  .delete(taskController.deleteTask);

module.exports = router;