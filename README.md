yogi sub commands
=================

Example script to show how to create a [yogi](http://yui.github.com/yogi) sub command.

Create any script named `yogi-xxx`, make it executible and place it in your path. Now `xxx` can be used as a `yogi` sub command.

This can be anything that's executible, a bash script, a php script, anything.

The power comes if you write a `node.js` script:

Example
-------

`yogi` will export an evironment variable called `YOGI_PATH` to tell the sub command where `yogi` is at on the file system.

At that point you can require any part of `yogi` you want so that you can use it's internal tools.

This very simple example shows that logging and the built in `config` objects work.

```javascript
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
```
