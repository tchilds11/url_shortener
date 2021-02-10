const db = require('./conn.js');

class Short {
    constructor(id) {
        this.id = id;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM short;`);
            return response;
        } catch (err) {
            return err.message;
        }
    }

    async getShortData() {
        try {
            const query = `SELECT * FROM short WHERE id = ${this.id}`;
            const response = await db.one(query);
            return response;
        } catch (err) {
            return err.message;
        }
    }

}

module.exports = Short;