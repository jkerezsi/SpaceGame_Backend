const express = require('express');
const userController = require('../controllers/user.controller');
const loginController = require('../controllers/login-controller/login-controller');
const kingdomSettings = require('../controllers/settings-controller/settings-controller');
const resourceController = require('../controllers/resource.controller');
const getAllBuildingsController = require('../controllers/getAllBuildings.controller');


const router = express.Router();

router.post('/register', userController.userRegister);
router.post('/login', loginController.login);
router.get('/kingdom/resource', resourceController.getResources);
router.put('/kingdom', kingdomSettings.kingdomNameUpdate);
router.get('/kingdom/buildings', getAllBuildingsController.getAllBuildings);

module.exports = router;
