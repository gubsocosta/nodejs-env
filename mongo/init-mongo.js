db.createUser({
    user: "test",
    pwd: "secret",
    roles:[
        {
            role: "readWrite",
            db: "test"
        }
    ],
});

db.users.insert({
    name: "test"
});