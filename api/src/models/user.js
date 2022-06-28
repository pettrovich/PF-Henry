const { DataTypes } = require('sequelize');
const { default: isEmail } = require('validator/lib/isEmail');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.INTEGER,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        },
        allowNull: false,
        unique: true
      },
    celphone: {
        type: DataTypes.BIGINT,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: {
          args: [3, 255],
          mensaje: "El usuario tiene que tener 2 caracteres como minimo"
        }
      }
   },
    googleId: {
    type: DataTypes.STRING,
    },
    picture: {
    type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.TEXT,
    }
  });
};
