
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'categories',
    timestamps: true
  });

  return Category;
};