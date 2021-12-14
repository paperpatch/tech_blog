const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'simple',
    email: 'simple@simple.com',
    password: 'password123'
  },
  {
    username: 'random',
    email: 'random@random.com',
    password: 'password123'
  },
  {
    username: 'secret',
    email: 'secret@secret.com',
    password: 'password123'
  },
  {
    username: 'someone',
    email: 'someone@someone.com',
    password: 'password123'
  },
  {
    username: 'food',
    email: 'food@food.com',
    password: 'password123'
  },
  {
    username: 'mouse',
    email: 'mouse@mouse.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
