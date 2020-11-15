//*const { DataTypes } = require("sequelize/types");
//*const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const Journal = sequelize.define('journal',{
        title: {
            type: DataTypes.STRING,
            allownull: false
        },
        date: {
            type: DataTypes.STRING,
            allownull: false
        },
        entry: {
            type: DataTypes.STRING,
            allownull: false
        },
        owner: {
             
                type: DataTypes.INTEGER
            
        }
    })
    return Journal;
}