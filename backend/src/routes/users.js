const { Router } = require("express");
const {getAllUsers,
     getUsers,
     postUser, 
     getUserById,      
     getUserByMacAddress, 
     updateUser, 
     deleteUser, 
     getQuantiTyOfUsers,
     getUserByName} = require("../controllers/users.js");


const router = Router();

router.get('/',       getAllUsers);
router.get('/:name',    getUserByName);
router.get('/quantity', getQuantiTyOfUsers);
router.post('/',      postUser);

router.get('/:id',    getUserById);
router.get('/',       getUserByMacAddress);
router.put('/:id',    updateUser);
router.delete('/:id', deleteUser);



module.exports = router;