# aws-ebc [![Build Status](https://travis-ci.org/ceasbz/aws-ebc.svg?branch=master)](https://travis-ci.org/ceasbz/aws-ebc) [![Dependency Status](https://david-dm.org/ceasbz/aws-ebc.svg?style=flat-square)](https://david-dm.org/ceasbz/aws-ebc) [![Npm Package Version](https://img.shields.io/npm/v/aws-ebc.svg?style=flat-square)](https://www.npmjs.org/package/aws-ebc)

> Describe details of an environment at Elastic Beanstalk by their URL

## Why? 

If you use ***Blue Green Deployment*** with [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/), know that there is no fixed id of environments. Through the Swap Url's you make the switch the URL of environments.

So you can assume that the only fixed reference is the URL of your environment. However, the SDK of AWS does not Provide an API where you find in this way. 

And this package solve this problem.

## Install

```bash
npm i --save aws-ebc
```

## Usage

```js
const awsEbc = require('aws-ebc');

const url = 'my-application.us-east-1.elasticbeanstalk.com';
const appName = 'my-application';

const credentials = {
    region: 'us-east-1',
    accessKeyId: 'ACCESSKEYID',
    secretAccessKey: 'SECRETACCESSKEY'
};

awsEbc(url, appName, credentials).then(environment => {
    console.log(environment.name) // app
});
```

## API

### awsEbc(url, appName, credentials)

Return an object with `id`, `name`, `health` and `status` of the environment.

#### url

Type: `string`

URL of the environment you're searching.

#### appName

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

MIT © [Cauê Alves](https://twitter.com/ceasbz)
