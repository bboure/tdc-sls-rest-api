'use strict';

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: "This is private content"
  };
};
