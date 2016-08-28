# aws-ebc [![Build Status](https://travis-ci.org/ceasbz/aws-ebc.svg?branch=master)](https://travis-ci.org/ceasbz/aws-ebc) [![Dependency Status](https://david-dm.org/ceasbz/aws-ebc.svg?style=flat-square)](https://david-dm.org/ceasbz/aws-ebc) [![Npm Package Version](https://img.shields.io/npm/v/aws-ebc.svg?style=flat-square)](https://www.npmjs.org/package/aws-ebc)

> Get the id of environment on Elastic Beanstalk by their canonical name.


## Why? 

If you use Blue Green Deployment with Elastic Beanstalk, know that there is no fixed id for the environments. Through the Swap Url's you make the switch the canonical name of the environments. 

So you can assume that the only fixed reference is the canonical name of your environment. However, the SDK of AWS does not Provide an API where you find in this way. And this package is for it :)

## Install

```bash
npm i --save aws-ebc
```

## Usage

```js
const awsEbc = require('aws-ebc');

const canonicalName = 'my-application.us-east-1.elasticbeanstalk.com';
const applicationName = 'my-application';

const credentials = {
    region: 'us-east-1',
    accessKeyId: 'ACCESSKEYID',
    secretAccessKey: 'SECRETACCESSKEY'
};

awsEbc(canonicalName, applicationName, credentials).then(environmentId => console.log(environmentId));
```

## API

### awsEbc(canonicalName, applicationName, credentials)

Return a promise with the id of environment.

#### canonicalName

Type: `string`

Canonical name of the environment you are looking for.

#### applicationName

Type: `string`

The application name of the environment.

#### credentials.region

Type: `string`

The region that their environment is available.

#### credentials.accessKeyId

Type: `string`

Acces Key Id offered by AWS Identity and Access Management (IAM)

#### credentials.secretAccessKey

Type: `string`

Secret Access Key offered by AWS Identity and Access Management (IAM)

## License

MIT © [Cauê Alves](./README.md)
