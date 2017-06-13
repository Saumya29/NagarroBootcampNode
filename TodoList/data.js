/**
 * Created by championswimmer on 13/06/17.
 */
const Sequelize = require('sequelize');
const db = new Sequelize('ngrdb', 'bootcamp', 'mypass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 5000
    }
});

const Todo = db.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task: Sequelize.STRING,
    done: Sequelize.BOOLEAN
});

db.sync({});

function getTodos () {
    return Todo.findAll({
        where: {
            done: false
        }
    })
}

function addTodo (todo) {
    return Todo.create({
        task: todo,
        done: false
    })
}

module.exports = {
    getTodos,
    addTodo
};