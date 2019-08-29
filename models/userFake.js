/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('userFake', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    identificationType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'identification_type'
    },
    identificationNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'identification_number'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'email'
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'address'
    }
  }, {
      tableName: 'user_fake',
      timestamps: false
    });
};
