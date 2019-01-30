# API Client

[![](https://img.shields.io/github/license/feardarkness/nih-client.svg)](https://github.com/feardarkness/nih-client) [![](https://img.shields.io/npm/v/nih-client/latest.svg)](https://github.com/feardarkness/nih-client)

Client for the National Institutes of Health - Office of dietary Supplements API [https://ods.od.nih.gov/api/](https://ods.od.nih.gov/api/).

## Install

```
$ npm install nih-client
```

## How to use

Just import the library and require any available Vitamin.

```
const nihClient = require('nih-client');

const options = {
  resourceName: 'Calcium',
  readingLevel: 'Health Professional',
};

nihClient
      .get(options)
      .then(response => {
        // do something with response.data
      })
      .catch(err => {
        done(err);
      });
```

### Available options

- outputFotmat: XML or HTML
- resourceName: any resource name
- readingLevel: _Consumer_, _Health Professional_ or _Datos en español_
