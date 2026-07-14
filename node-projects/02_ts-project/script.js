"use strict";
// Ek in memory DB
class InMemoryDB {
    _db;
    constructor() { }
    insertData(data) {
        if (this._db.has(data.id)) {
            throw new Error(`User with ID ${data.id} already exists`);
        }
        this._db.set(data.id, data);
        return data.id;
    }
    updateUser(id, updateData) {
        if (!this._db.has(id)) {
            throw new Error(`User with ID ${id} does not exits`);
        }
        this._db.set(id, { ...updateData, id });
        return true;
    }
}
const myDb = new InMemoryDB();
myDb.insertData({
    id: "1",
    fname: "Ajay",
    email: "ajay@gmail.com",
    contact: {
        moblie: "99999999999",
    },
    address: {
        country: "INR",
        pin: 87868,
        street: 1,
    },
});
myDb.updateUser("1", {
    fname: "Ajay",
    email: "ajay@gmail.com",
    contact: {
        moblie: "99999999999",
    },
    address: {
        country: "INR",
        pin: 87868,
        street: 1,
    },
});
