import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', 
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    },
  },
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'  
  }
});


export { sequelize };