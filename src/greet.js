'use strict';

module.exports.handler = async (event) => {

  console.log(event);

  let name = "Anonymous";

  if (event.queryStringParameters && event.queryStringParameters.name) {
    name = event.queryStringParameters.name;
  }

  return {
    statusCode: 200,
    body: `Hello ${name}!!`
  };
};
