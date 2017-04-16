const { cling } = require('static-cling');

const config = {
  root: './dist',
  port: 4567
};

cling(config);
