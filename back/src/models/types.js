import { Model, DataTypes } from "sequelize";
import { sequelize } from "./client.js";

export class Types extends Model {}

Types.init(
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    // Supprimez les définitions des colonnes createdAt et updatedAt
  },
  {
    sequelize,
    modelName: 'Types',
    tableName: "type",
    timestamps: false, // Désactivez les timestamps
  }
);