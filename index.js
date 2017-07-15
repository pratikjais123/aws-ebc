'use strict';

module.exports = (url, appName, credentials) => {
    if (typeof url !== 'string') {
        throw new TypeError(`Expected a string but got ${typeof url}`);
    }

    if (typeof appName !== 'string') {
        throw new TypeError(`Expected a string but got ${typeof appName}`);
    }

    if (typeof credentials !== 'object') {
        throw new TypeError(`Expected an object but got ${typeof credentials}`);
    }

    if (typeof credentials.region !== 'string') {
        throw new TypeError(`Expected a string but got ${typeof credentials.region}`);
    }

    if (typeof credentials.accessKeyId !== 'string') {
        throw new TypeError(`Expected a string but got ${typeof credentials.accessKeyId}`);
    }

    if (typeof credentials.secretAccessKey !== 'string') {
        throw new TypeError(`Expected a string but got ${typeof credentials.secretAccessKey}`);
    }

    const AWS = require('aws-sdk');

    return new Promise((resolve, reject) => {
        const elasticbeanstalk = new AWS.ElasticBeanstalk({
            apiVersion: '2010-12-01',
            region: credentials.region,
            accessKeyId: credentials.accessKeyId,
            secretAccessKey: credentials.secretAccessKey
        });

        elasticbeanstalk.describeEnvironments({
            ApplicationName: appName
        }, (error, data) => {
            if (error && (error.code == 'InvalidClientTokenId' || error.code == 'SignatureDoesNotMatch')) {
                return reject('Please check your credentials.');
            }

            if (!data.Environments.length) {
                return reject(`No environments are associated with the following application: ${appName}`);
            }

            let environment = {
                id: false,
                name: false,
                health: false,
                status: false
            };

            data.Environments.forEach(e => {
                if (url === e.CNAME) {
                    environment = {
                        id: e.EnvironmentId,
                        name: e.EnvironmentName,
                        health: e.Health,
                        status: e.Status
                    };
                };
            });

            if (!environment.id) {
                return reject(`No environment are associated with the following url: ${url}`);
            }

            return resolve(environment);
        });
    });
};
