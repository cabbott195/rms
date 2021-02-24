var express = require('express');
var router = express.Router();

// Require controller modules.
var ir_controller = require('../controllers/irController');

/// IR ROUTES ///

// GET RMS home page.
router.get('/', ircontroller.index);

// GET request for creating a IR. NOTE This must come before routes that display Book (uses id).
router.get('/ir/create', ir_controller.ir_create_get);

// POST request for creating IR.
router.post('/ir/create', ir_controller.ir_create_post);

// GET request to delete IR.
router.get('/ir/:id/delete', ir_controller.ir_delete_get);

// POST request to delete IR.
router.post('/ir/:id/delete', ir_controller.ir_delete_post);

// GET request to update IR.
router.get('/ir/:id/update', ir_controller.ir_update_get);

// POST request to update IR.
router.post('/ir/:id/update', ir_controller.ir_update_post);

module.exports = router;