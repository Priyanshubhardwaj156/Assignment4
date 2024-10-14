import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('job', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  logging:false
});

export default sequelize;