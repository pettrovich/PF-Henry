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
        allowNull: false
    },
    zipCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    houseType: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });
};
