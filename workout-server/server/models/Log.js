const {DataTypes} = require('sequelize');
const db = require('')

const Log = db.define('workoutlog', {
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    definition: {
        type: DataTypes.STRING,
        allowNull: false
    },
    result : {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true

    }
})
module.exports = Log