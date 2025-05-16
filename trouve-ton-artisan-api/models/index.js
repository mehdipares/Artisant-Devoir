const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // ✅ Réutilisation de la config propre

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Category = require('./category')(sequelize, DataTypes);
db.Specialite = require('./Specialite')(sequelize, DataTypes);
db.Artisan = require('./Artisan')(sequelize, DataTypes);

db.Category.hasMany(db.Specialite, { foreignKey: 'categorieId' });
db.Specialite.belongsTo(db.Category, { foreignKey: 'categorieId' });

db.Specialite.hasMany(db.Artisan, { foreignKey: 'specialiteId' });
db.Artisan.belongsTo(db.Specialite, { foreignKey: 'specialiteId' });

module.exports = db;