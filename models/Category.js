const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init({
    // define columns
    catagoryName: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
          isAlpha:true
      }
  },

},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
