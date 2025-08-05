
export default function (sequelize, DataTypes) {
  const Case = sequelize.define(
    "Case",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(512),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      category: {
        type: DataTypes.ENUM("Criminal", "Civil", "Family", "Others"),
        allowNull: false,
        defaultValue: "Others",
      },
      priority: {
        type: DataTypes.ENUM("High", "Medium", "Low"),
        allowNull: false,
        defaultValue: "Medium",
      },
      status: {
        type: DataTypes.ENUM("Pending", "In Progress", "Resolved"),
        allowNull: false,
        defaultValue: "Pending",
      },
      // foreign key judgeId will be added by association
    },
    {
      tableName: "cases",
    }
  );

  return Case;
}
