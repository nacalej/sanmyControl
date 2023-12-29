const { getConnection } = require("../database/database.js");


///BEGIN OF getAllUsers
async function getAllUsers(req, res, next){
             
    try {
        const connection = await getConnection();
        const allUsers = 'SELECT * FROM users ORDER BY name ASC';
        connection.query(allUsers, (error, results) => {
           if(error!==null) {
              res.send(error);
           }
           else{
              if(!results.length){
                 res.status(404).send("Not found :(")
              }
              else{
                 res.status(200).send(results);
              }
           }
        });

    } catch (error) {
       res.status(500).send(error.message);        
    }
};
/// END OF getAllUsers

///BEGIN OF postUser
async function postUser(req, res) {
    const {id, name, lastName, macAddress} = req.body;
    try {
        const connection = await getConnection();        
        const user = {
            id,
           name, 
           lastName,
           macAddress
        }
       // console.log("MACHINE: ", machine);
        const newUser=  await connection.query("INSERT INTO users SET ? ", user);
        res.status(200).send(newUser); 
        if(!newUser){
           res.status(404).send("We could not insert values into table: users :(")
        }     
     } catch (error) {
        res.status(500).send(error.message);      
     }   
};
///END OF postUser

///BEGIN OF getUserById
async function getUserById(req, res, next){
    const {id} = req.params;
    try{
        const connection = await getConnection();
        const userById = 'SELECT * FROM users WHERE id= '+ connection.escape(id);
        await connection.query(userById, (error, results) => {
            if(error!==null) {
                console.log(error);
                next(error);
            }
            else{
                if(!results.length){
                    res.status(404).send("User not found :(")
                }
            else{
                res.status(200).send(results);
            }
        }
        });
    } catch (error) {
        res.status(500).send(error.message);        
 }
};
///END OF getUserById



///BEGIN OF getUserByName
async function getUserByName(req, res, next){
    // let allUsersInDB = await getUsers();
    // console.log("USERS --------", allUsersInDB);
   
    const {name} = req.params;
    console.log("------ NAME IN BACKEND: ", name);
    try{
        const connection = await getConnection();
        // const userByName = ''+ name;
        await connection.query('SELECT * FROM users WHERE name = ? ',[name], (error, results) => {
            if(error!==null) {
                console.log(error);
                next(error);
            }
            else{
                if(!results.length){
                    res.status(404).send("User not found :(")
                }
            else{
                res.status(200).send(results);
            }
        }
        });
    } catch (error) {
        res.status(500).send(error.message);        
 }
};
///END OF getUserByName

///BEGIN OF getUserByMacAddress
async function getUserByMacAddress(req, res, next){
    const {macAddress} = req.query;  
    try{
        const connection = await getConnection();
        const userByName = 'SELECT * FROM users WHERE macAddress = ? '+ macAddress;
        await connection.query(userByName, (error, results) => {
            if(error!==null) {
                console.log(error);
                next(error);
            }
            else{
                if(!results.length){
                    res.status(404).send("User not found :(")
                }
            else{
                res.status(200).send(results);
            }
        }
        });
    } catch (error) {
        res.status(500).send(error.message);        
 }
};
///END OF getUserByMacAddress

///BEGIN OF deleteUser
async function deleteUser(req, res, next){
    const {id} = req.params;
    console.log("ID -- back: ", id);
        const connection = await getConnection();
        await connection.query('DELETE FROM users WHERE id= ?', [id], (error, result) => {
            if(error!==null) {
               res.send(error.message);
            }
            else{
                res.status(200).send(result);
            }

        });
};
///END OF deleteUser

///BEGIN OF updateUser
async function updateUser(req, res, next){
    const { id } = req.params;
    if(id){
        let  user = req.body;
        console.log("ID en machine");
        console.log("DATA a UPDATEAR: ",user);
        const connection = await getConnection();
        await connection.query('UPDATE users SET ? WHERE id = ?', [user, id], (error, result) => {
         if(error!==null) {
            res.send(error);
         }
         res.status(200).send(result);
        });
    }
};
///END OF updateUser

///BEGIN OF getQuantiTyOfUsers
async function getQuantiTyOfUsers(req, res, next){
    try {
        const connection = await getConnection();
        const allQuantityOfUsers = ' SELECT id, COUNT(id) AS quantity FROM users GROUP BY id';
        connection.query(allQuantityOfUsers, (error, results) => {
           if(error!==null) {
              res.send(error);
           }
           else{
              if(!results.length){
                 res.status(404).send("Not found :(")
              }
              else{
                 res.status(200).send(results);
              }
           }
        });
    } catch (error) {
       res.status(500).send(error.message);        
    }
    
}
///END OF getQuantiTyOfUsers

module.exports = {
    getAllUsers,
    getQuantiTyOfUsers,
    postUser,
    getUserById,
    getUserByName,
    getUserByMacAddress,
    deleteUser,
    updateUser
};