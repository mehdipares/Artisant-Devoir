const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
  }
);

const Artisan = sequelize.define('Artisan', {
  nom: DataTypes.STRING,
  specialiteId: DataTypes.INTEGER
}, {
  tableName: 'artisans',
  timestamps: true
});

(async () => {
  await sequelize.authenticate();
  console.log('✅ Connexion OK');

  const results = await Artisan.findAll({
    where: {
      specialiteId: [5, 6, 7, 8]
    }
  });

  console.log('Artisans trouvés pour les spécialités 5,6,7,8 :', results.map(a => a.dataValues));
})();