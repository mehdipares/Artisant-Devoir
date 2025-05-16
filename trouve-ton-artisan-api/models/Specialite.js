module.exports = (sequelize, DataTypes) => {
  const Specialite = sequelize.define('Specialite', {
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    categorieId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'specialites',
    timestamps: true
  });

  return Specialite;
};