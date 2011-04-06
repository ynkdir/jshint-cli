
all: bin/jshint bin/jshint-wsh-cli.js

bin/jshint: jshint.js jshint-node.js jshint-cli.js
	echo "#!/usr/bin/env node" > bin/jshint
	cat jshint.js jshint-node.js jshint-cli.js >> bin/jshint

bin/jshint-wsh-cli.js: jshint.js jshint-wsh.js jshint-cli.js
	cat jshint.js jshint-wsh.js jshint-cli.js > bin/jshint-wsh-cli.js

jshint.js:
	wget --no-check-certificate https://github.com/jshint/jshint/raw/master/jshint.js

