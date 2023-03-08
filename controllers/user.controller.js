// const { User } = require("../models/user.model");

const { User } = require("../models/user.model");


// const getUser = async (req, res) => {
//     try {
//         const result = await User.create(req.body)
//         res.send(result);
//     }
//     catch { }
// }

const getUser = async (req, res) => {

    const result = await User.create(req.body)
    res.send(result)

}

exports.getUser = getUser;