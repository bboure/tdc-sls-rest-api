'use strict';

module.exports.handler = async (event) => {
  const user = JSON.parse(event.body);
  user.id = 1;
  
  console.log(user);
  // TODO: insert into database

  return {
    statusCode: 201,
    body: JSON.stringify(user)
  };
};
