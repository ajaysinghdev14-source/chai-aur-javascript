// Ek in memory DB

// HashMap (Key, Value)
//           T?   T?

type UserID = string;

interface User {
  id: UserID;
  fname: string;
  lname?: string;
  email: string;
  contact: {
    moblie: string;
  };
  address: {
    street: number;
    pin: number;
    country: string;
  };
}

class InMemoryDB {
  private _db: Map<UserID, User>;

  constructor() {}

  public insertData(data: User): UserID {
    if (this._db.has(data.id)) {
      throw new Error(`User with ID ${data.id} already exists`);
    }
    this._db.set(data.id, data);
    return data.id;
  }

  public updateUser(id: UserID, updateData: Omit<User, "id">): boolean {
    if (!this._db.has(id)) {
      throw new Error(`User with ID ${id} does not exits`);
    }

    this._db.set(id, { ...updateData, id });
    return true;
  }

  public getUserById(id: UserID): User {
    if (!this._db.has(id)) {
      throw new Error(`User with ID ${id} does not exits`);
    }
    return this._db.get(id)!;
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
