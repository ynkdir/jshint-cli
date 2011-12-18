
wget=wget --no-check-certificate

all: bin/jshint bin/jshint.bat

bin/jshint: jshint.js jshint-node.js optspec.js jshint-cli.js
	echo "#!/usr/bin/env node" > $@
	cat $^ >> $@

bin/jshint.bat: jshint.js jshint-wsh.js optspec.js jshint-cli.js
	echo '@set @junk=1 /*' > $@
	echo '@echo off' >> $@
	echo 'cscript //nologo //E:jscript "%~dpn0.bat" %*' >> $@
	echo 'goto :eof' >> $@
	echo '*/' >> $@
	cat $^ >> $@
	# unix2dos
	sed 's/$$/\r/' $@ > __tmp && mv __tmp $@

update:
	$(wget) https://github.com/jshint/jshint/raw/master/jshint.js

