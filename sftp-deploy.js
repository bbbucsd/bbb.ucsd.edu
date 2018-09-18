#!/usr/bin/env node
const nodeSftpDeploy = require('node-sftp-deploy');

if (
  process.env.DEPLOY_HOST &&
  process.env.DEPLOY_USER &&
  process.env.DEPLOY_PASSWORD &&
  process.env.DEPLOY_PATH &&
  process.env.DEPLOY_SRC
) {
  nodeSftpDeploy({
    host: process.env.DEPLOY_HOST,
    port: process.env.DEPLOY_PORT || '22',
    user: process.env.DEPLOY_USER,
    pass: process.env.DEPLOY_PASSWORD,
    remotePath: process.env.DEPLOY_PATH,
    sourcePath: process.env.DEPLOY_SRC || './'
  }).then(() => {
    console.log('<U+1F355>  Deployment done.');
  }).catch((err) => {
    console.error('Deployment error:', err);
  });
} else {
  console.warn(
    'Deployment omitted.',
    'Set DEPLOY_HOST, DEPLOY_USER, DEPLOY_PASSWORD, DEPLOY_PATH to deploy.'
  );
}
