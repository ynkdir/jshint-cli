
all: bin/jshint bin/jshint.bat

bin/jshint: jshint.js jshint-node.js jshint-cli.js
	echo "#!/usr/bin/env node" > bin/jshint
	cat jshint.js jshint-node.js jshint-cli.js >> bin/jshint

bin/jshint.bat: jshint.js jshint-wsh.js jshint-cli.js
	echo '@set @junk=1 /*' > $@
	echo '@echo off' >> $@
	echo 'cscript //nologo //E:jscript "%~dpn0.bat" %*' >> $@
	echo 'goto :eof' >> $@
	echo '*/' >> $@
	cat jshint.js jshint-wsh.js jshint-cli.js >> $@
	# unix2dos
	sed 's/$$/\r/' $@ > __tmp
	mv __tmp $@

jshint.js:
	wget --no-check-certificate https://github.com/jshint/jshint/raw/master/jshint.js

