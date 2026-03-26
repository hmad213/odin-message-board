const pool = require("./pool")

async function getAllMessages(){
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function getMessage(id){
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    return rows[0];
}

async function insertMessage({ text, user }){
    await pool.query("INSERT INTO messages (text, name) VALUES ($1, $2)", [text, user]);
}

module.exports = {
    getAllMessages,
    getMessage,
    insertMessage
}