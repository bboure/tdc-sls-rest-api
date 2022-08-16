'use strict';

module.exports.handler = async (event) => {

  // TODO: fetch from database
  const user = {
    id: 1,
    name: "John",
    email: "john@example.com"
  };

  return {
    statusCode: 200,
    body: JSON.stringify(user)
  };
};
