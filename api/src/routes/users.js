const { Router } = require('express');
const getAdmins = require("../controllers/User/GET/getAdmins");
const getBannedUsers = require("../controllers/User/GET/getBannedUsers");
const getUserByEmail = require("../controllers/User/GET/getUserByEmail");
const getUserById = require("../controllers/User/GET/getUserById");
const getUsers = require("../controllers/User/GET/getUsers");
// const { addFavourite, getFavourites, removeFavourite } = require("../controllers/Product/GET/favourites");
// const { createAddress, getAddress, updateAddress } = require("../controllers/Address/GET/addresses");
// const { createUser, updateUserInfo } = require("../controllers/User/GET/users");
const router = Router();

router.get('/', async (req, res) => {
    try {
        const userList = await getUsers();
        return res.json(userList);
    }
    catch (err) {
        return res.status(500).send(`No se pudo cargar la lista de usuarios (${err})`);
    }
});

router.get('/admin', async (req, res) => {
    try {
        const adminList = await getAdmins();
        return res.json(adminList);
    }
    catch (err) {
        return res.status(500).send(`No se pudo cargar la lista de usuarios (${err})`);
    }
});

router.get('/banned', async (req, res) => {
    try {
        const bannedList = await getBannedUsers();
        return res.json(bannedList);
    }
    catch (err) {
        return res.status(500).send(`No se pudo cargar la lista de usuarios (${err})`);
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const user = await getUserById(id);
        return res.json(user);
    }
    catch (err) {
        return res.status(500).send(`No se pudo cargar la información del usuario (${err})`);
    }
});



router.post('/', async (req, res) => {
    const {name, email} = req.body;
    try {
        let user = await getUserByEmail(email);
        if (user) return res.status(200).json(user);
        user = await createUser(name, email);
        return res.status(201).json(user);
    }
    catch (err) {
        return res.status(500).send(`No se pudo crear el usuario (${err})`);
    }
    // const { address, number, zipCode, country, houseType } = req.body;
    // const userAddress = await createAddress(address, number, zipCode, province, location, apartment, description);
});

router.put('/userInfo/:id', async (req, res) => {
    const {id} = req.params;
    const userData = req.body;
    try {
        const user = await updateUserInfo(id, userData);
        return res.json(user);
    }
    catch (err) {
        return res.status(500).send(`No se pudo modificar la información del usuario (${err})`);
    }
});

//******************* */

router.get('/:username/address', async (req, res) => {
    const { username } = req.params;
    try {
        const address = await getAddress(username);
        return res.json(address);
    }
    catch (err) {
        return res.status(404).send(`No se pudo cargar la información de la dirección (${err})`);
    }
});

router.get('/:username/favourites', async (req, res) => {
    const { username } = req.params;
    try {
        const favourites = await getFavourites(username);
        return res.json(favourites);
    }
    catch (err) {
        return res.status(404).send(`No se pudo cargar la información de productos favoritos (${err})`);
    }
});

router.post('/:username/addFavourite', async (req, res) => {
    const { username } = req.params;
    const { productId } = req.query;
    try {
        if (!productId) return res.status(404).send('No se seleccionó ningún producto');
        const product = await addFavourite(username);
        return res.json(product);
    }
    catch (err) {
        return res.status(404).send(`No se pudo agregar el producto a favoritos (${err})`);
    }
});

router.post('/:username/addFavourite', async (req, res) => {
    const { username } = req.params;
    const { productId } = req.query;
    try {
        if (!productId) return res.status(404).send('No se seleccionó ningún producto');
        const favourites = await addFavourite(username);
        return res.json(favourites);
    }
    catch (err) {
        return res.status(404).send(`No se pudo agregar el producto a favoritos (${err})`);
    }
});

router.post('/:username/removeFavourite', async (req, res) => {
    const { username } = req.params;
    const { productId } = req.query;
    try {
        if (!productId) return res.status(404).send('No se seleccionó ningún producto');
        const favourites = await removeFavourite(username);
        return res.json(favourites);
    }
    catch (err) {
        return res.status(404).send(`No se pudo eliminar el producto de los favoritos (${err})`);
    }
});

router.put('/:username/address', async (req, res) => {
    const { username } = req.params;
    const addressData = req.body;
    try {
        const address = await updateAddress(username, addressData);
        return res.json(address);
    }
    catch (err) {
        return res.status(404).send(`No se pudo modificar la información de la dirección (${err})`);
    }
});

router.delete('/:username', async (req, res) => {
    const { username } = req.params;
    try {
        let rows = await deleteUser(username);
        return res.status(204).json(`${rows} usuario eliminado`);
    }
    catch (err) {
        return res.status(404).send(`No se pudo eliminar el usuario (${err})`);
    }
});

module.exports = router;