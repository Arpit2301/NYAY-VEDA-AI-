
export default function (sequelize, DataTypes) {
  const Judge = sequelize.define(
    "Judge",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      specialization: {
        type: DataTypes.ENUM("Criminal", "Civil", "Family", "Others"),
        allowNull: false,
      },
      currentLoad: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: { isEmail: true },
      },
    },
    {
      tableName: "judges",
    }
  );

  return Judge;
}
