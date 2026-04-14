const Task = require('../models/taskModel');

exports.getTask = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      status: "success",
      results: tasks.length,
      data: tasks
    });

  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({
        status: "fail",
        message: "Title is required"
      });
    }

    const newTask = await Task.create({
      title,
      description
    });

    res.status(201).json({
      status: "success",
      data: newTask
    });

  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message
    });
  }
};

exports.getSpecificTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        status: "fail",
        message: "Task not found"
      });
    }

    res.status(200).json({
      status: "success",
      data: task
    });

  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "Invalid ID"
    });
  }
};


// UPDATE TASK
exports.updateSpecificTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        status: "fail",
        message: "Task not found"
      });
    }

    if (task.completed && req.body.completed === true) {
      return res.status(400).json({
        status: "fail",
        message: "Task already completed"
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      status: "success",
      data: updatedTask
    });

  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message
    });
  }
};


exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        status: "fail",
        message: "Task not found"
      });
    }

    await Task.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null
    });

  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "Invalid ID"
    });
  }
};