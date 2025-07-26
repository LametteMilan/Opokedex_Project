import { Model, DataTypes } from "sequelize";
import { sequelize } from "./client.js";

export class Pokemon extends Model {}

Pokemon.init(
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    // Supprimez les définitions des colonnes createdAt et updatedAt
  },
  {
    sequelize,
    modelName: 'Pokemon',
    tableName: "pokemon",
    timestamps: false, // Désactivez les timestamps
  }
);