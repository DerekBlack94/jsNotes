const Sequelize = require('sequelize');
const sequelize = new Sequelize('workOutLog','postgres','Letmein1234',{
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to Work out Log postgres database');

    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize