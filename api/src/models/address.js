const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Address', {
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
        type: DataTypes.INTEGER,
    },
    zipCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
      type: DataTypes.STRING,
    },
    apartment: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT,
    }
  });
};
