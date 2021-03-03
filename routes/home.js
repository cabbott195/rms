var express = require('express');
var router = express.Router();

// Require controller modules.
var ir_controller = require('../controllers/irController');

/// IR ROUTES ///

// GET RMS home page.
router.get('/', ir_controller.index);

// GET request for creating a IR. NOTE This must come before routes that display Book (uses id).
router.get('/ir/create', 'test');

// // POST request for creating IR.
// router.post('/ir/create', 'test');

// // GET request to delete IR.
// router.get('/ir/:id/delete', 'test');

// // POST request to delete IR.
// router.post('/ir/:id/delete', 'test');

// // GET request to update IR.
// router.get('/ir/:id/update', 'test');

// // POST request to update IR.
// router.post('/ir/:id/update', 'test');

module.exports = router;