import { Model, DataTypes } from "sequelize";
import { sequelize } from "./client.js";

export class Teams extends Model {}

Teams.init(
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'Teams',
    tableName: "team",
    timestamps: false, // Désactivez les timestamps
  }
);
