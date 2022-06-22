const {Router} = require('express');
const {getAdminUsers,getNonAdminUsers,getUserByUsername} = require("../controllers/getUsers");
const router = Router();

router.get('/', async (req,res) => {
    return await getNonAdminUsers(res);
});

router.get('/admin', async (req,res) => {
    return await getAdminUsers(res);
});

router.get('/:username', async (req,res) => {
    const {username} = req.params;
    return await getUserByUsername(username,res);
});

module.exports = router;