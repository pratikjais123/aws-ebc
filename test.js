import test from 'ava';
import fn from './';

const applicationName = 'my-application';
const canonicalName = 'my-application.us-east-1.elasticbeanstalk.com';

const credentials = {
    region: 'us-east-1',
    accessKeyId: 'ACCESSKEYID',
    secretAccessKey: 'SECRETACCESSKEY'
};

test('should throw exception with the invalid arguments', t => {
    t.throws(() => {
        fn(canonicalName);
    }, /Expected a string but got undefined/);

    t.throws(() => {
        fn(canonicalName, applicationName);
    }, /Expected an object but got undefined/);
});

test('should reject with invalid credentials', async t => {
    await fn(canonicalName, applicationName, credentials).catch(error => {
        t.is(error, 'Please check your credentials.');
    });
});
