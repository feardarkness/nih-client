require('@babel/polyfill');
const axios = require('axios');

const NIH_API_URL = 'https://ods.od.nih.gov/api';

const get = async params => {
  if (params.resourceName === null || params.resourceName === undefined) {
    throw new Error('Name param is needed');
  }
  return axios({
    url: NIH_API_URL,
    method: 'GET',
    params: {
      outputFotmat: params.outputFotmat || 'HTML',
      resourceName: params.resourceName,
      readingLevel: params.readingLevel || 'Consumer',
    },
  });
};

module.exports = {
  get,
};
