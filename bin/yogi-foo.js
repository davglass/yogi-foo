#!/usr/bin/env node

var YOGI_PATH = process.env.YOGI_PATH,
    path = require('path');

if (!YOGI_PATH) {
    console.log('This should be executed from yogi');
    process.exit(1);
}

var args = require(path.join(YOGI_PATH, 'lib/args'));
var log = require(path.join(YOGI_PATH, 'lib/log'));
var config = require(path.join(YOGI_PATH, 'lib/config'));

var options = args.parse();
config.init(options);

log.info('foo command here');
log.info('you are logged in as: ' + config.get('username'));


