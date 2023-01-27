require("dotenv").config();
const axios = require("axios");

const getToken = async (client) => {
    const user = {
        user: {
            username: "engine",
            email: "engine@wilco.work",
            password: "wilco1234",
        },
    };

    try {
        const loginRes = await client.post(`/api/users/login`, user);
        if (loginRes.data?.user?.token) {
            return loginRes.data.user.token;
        }
    } catch (e) {
        //User doesn't exists yet
    }

    const userRes = await client.post(`/api/users`, user);
    return userRes.data?.user?.token;
};


getToken()
    .then((res) => process.exit(res ? 0 : 1))
    .catch((e) => {
        console.log("error while checking api: " + e);
        process.exit(1);
    });