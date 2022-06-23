const {Router} = require('express');
const {createAddress, getAddressByUsername, updateAddress} = require("../controllers/addresses");
const {createUser, getAdminUsers, getNonAdminUsers, getUserByUsername,updateUser} = require("../controllers/users");
const router = Router();

router.post('/', async (req,res) => {
    const {address, number, zipCode, country, houseType} = req.body;
    const {name, lastName, dni, email, celphone, username, password} = req.body;
    try {
        const userAddress = await createAddress(address, number, zipCode, country, houseType);
        const user = await createUser(name, lastName, dni, email, celphone, username, password, false, userAddress);
        return res.status(201).json(user);
    }
    catch (err) {
        res.status(404).send(`No se pudo crear el usuario (${err})`)
    }
});

router.get('/', async (req,res) => {
    try {
        const userList = await getNonAdminUsers();
        return res.json(userList);
    }
    catch (err) {
        res.status(404).send(`No se pudo cargar la lista de usuarios (${err})`)
    }
});

router.get('/admin', async (req,res) => {
    try {
        const adminList = await getAdminUsers();
        return res.json(adminList);
    }
    catch (err) {
        res.status(404).send(`No se pudo cargar la lista de usuarios (${err})`)
    }
});

router.get('/:username', async (req,res) => {
    const {username} = req.params;
    try {
        const user= await getUserByUsername(username,res);
        return res.json(user);
    }
    catch (err) {
        res.status(404).send(`No se pudo cargar la información del usuario (${err})`)
    }
});

router.get('/:username/address', async (req,res) => {
    const {username} = req.params;
    try {
        const address= await getAddressByUsername(username,res);
        return res.json(address);
    }
    catch (err) {
        res.status(404).send(`No se pudo cargar la información de la dirección (${err})`)
    }
});

router.put('/:username', async (req,res) => {
    const {username} = req.params;
    const userData = req.body;
    try {
        const user = await updateUser(username,userData);
        return res.json(user);
    }
    catch (err) {
        res.status(404).send(`No se pudo modificar la información del usuario (${err})`)
    }
});

router.put('/:username/address', async (req,res) => {
    const {username} = req.params;
    const addressData = req.body;
    try {
        const address = await updateAddress(username,addressData);
        return res.json(address);
    }
    catch (err) {
        res.status(404).send(`No se pudo modificar la información de la dirección (${err})`)
    }
});

router.delete('/:username', async (req,res) => {
    const {username} = req.params;
    try {
        let rows = await deleteUser(username);
        return res.status(204).json(`${rows} usuario eliminado`);
    }
    catch (err) {
        res.status(404).send(`No se pudo eliminar el usuario (${err})`)
    }
});