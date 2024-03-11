const express = require("express");
const { QuesModel } = require("../models/que.model.js");

const questionRouter = express.Router();

questionRouter.get('/', async (req, res) => {
    
    try {
        const questions = await QuesModel.find({type: 'multiple'}).limit(10);

        res.send({"questions": questions});

    } catch (err) {
        res.send({'err': err});
    }
})

module.exports = {
    questionRouter
}