module.exports = (sequelize, DataTypes) => {
  const Artisan = sequelize.define('Artisan', {
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    note: {
      type: DataTypes.DECIMAL(2, 1),
      defaultValue: null
    },
    ville: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    a_propos: {
      type: DataTypes.TEXT,
      defaultValue: null
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    site_web: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    is_top: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    specialiteId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: null
    }
  }, {
    tableName: 'artisans',
    timestamps: true
  });

  return Artisan;
};
