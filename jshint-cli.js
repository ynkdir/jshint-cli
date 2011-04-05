
function usage() {
  print('jshint [options] file');
  print('options:');
  print('  --help');
  print('  --adsafe     true, if ADsafe rules should be enforced');
  print('  --asi        true, if automatic semicolon insertion should be tolerated');
  print('  --bitwise    true, if bitwise operators should not be allowed');
  print('  --browser    true, if the standard browser globals should be predefined');
  print('  --boss       true, if advanced usage of assignments and == should be allowed');
  print('  --cap        true, if upper case HTML should be allowed');
  print('  --couch      true, if CouchDB globals should be predefined');
  print('  --css        true, if CSS workarounds should be tolerated');
  print('  --curly      true, if curly braces around blocks should be required (even in if/for/while)');
  print('  --debug      true, if debugger statements should be allowed');
  print('  --devel      true, if logging should be allowed (console, alert, etc.)');
  print('  --eqeqeq     true, if === should be required');
  print('  --es5        true, if ES5 syntax should be allowed');
  print('  --evil       true, if eval should be allowed');
  print('  --expr       true, if ExpressionStatement should be allowed as Programs');
  print('  --forin      true, if for in statements need not filter');
  print('  --fragment   true, if HTML fragments should be allowed');
  print('  --immed      true, if immediate invocations must be wrapped in parens');
  print('  --jquery     true, if jQuery globals should be predefined');
  print('  --indent     the indentation factor');
  print('  --latedef    true, if the use before definition should not be tolerated');
  print('  --laxbreak   true, if line breaks should not be checked');
  print('  --loopfunc   true, if functions should be allowed to be defined within loops');
  print('  --maxerr     the maximum number of errors to allow');
  print('  --maxlen     the maximum length of a source line');
  print('  --newcap     true, if constructor names must be capitalized');
  print('  --noarg      true, if arguments.caller and arguments.callee should be disallowed');
  print('  --node       true, if Node.js globals should be predefined');
  print('  --noempty    true, if empty blocks should be disallowed');
  print('  --nonew      true, if using `new` for side-effects should be disallowed');
  print('  --nomen      true, if names should be checked');
  print('  --on         true, if HTML event handlers should be allowed');
  print('  --onevar     true, if only one var statement per function should be allowed');
  print('  --passfail   true, if the scan should stop on first error');
  print('  --plusplus   true, if increment/decrement should not be allowed');
  print('  --prototypejs true, if Prototype and Scriptaculous globals shoudl be predefined');
  print('  --regexp     true, if the . should not be allowed in regexp literals');
  print('  --rhino      true, if the Rhino environment globals should be predefined');
  print('  --undef      true, if variables should be declared before used');
  print('  --safe       true, if use of some browser features should be restricted');
  print('  --shadow     true, if variable shadowing should be tolerated');
  print('  --windows    true, if MS Windows-specific globals should be predefined');
  print('  --strict     true, require the "use strict"; pragma');
  print('  --sub        true, if all forms of subscript notation are tolerated');
  print('  --white      true, if strict whitespace rules apply');
  print('  --widget     true  if the Yahoo Widgets globals should be predefined');
  exit(0);
}

function main() {
  var args = getargs();
  var option = {};
  var filename = null;
  var i;
  if (args.length === 0) {
    usage();
  }
  for (i = 0; i < args.length; ++i) {
    if (args[i] === '-h' || args[i] === '--help') {
      usage();
    } else if (args[i] === '--adsafe') {
      option.adsafe = true;
    } else if (args[i] === '--asi') {
      option.asi = true;
    } else if (args[i] === '--bitwise') {
      option.bitwise = true;
    } else if (args[i] === '--browser') {
      option.browser = true;
    } else if (args[i] === '--boss') {
      option.boss = true;
    } else if (args[i] === '--cap') {
      option.cap = true;
    } else if (args[i] === '--css') {
      option.css = true;
    } else if (args[i] === '--couch') {
      option.couch = true;
    } else if (args[i] === '--debug') {
      option.debug = true;
    } else if (args[i] === '--devel') {
      option.devel = true;
    } else if (args[i] === '--eqeqeq') {
      option.eqeqeq = true;
    } else if (args[i] === '--es5') {
      option.devel = true;
    } else if (args[i] === '--evil') {
      option.evil = true;
    } else if (args[i] === '--expr') {
      option.expr = true;
    } else if (args[i] === '--forin') {
      option.forin = true;
    } else if (args[i] === '--fragment') {
      option.fragment = true;
    } else if (args[i] === '--immed') {
      option.immed = true;
    } else if (args[i].match(/^--indent(?:=(.+))?/)) {
      if (RegExp.$1 !== '') {
        option.indent = parseInt(RegExp.$1, 10);
      } else {
        option.indent = parseInt(process.argv[++i], 10);
      }
    } else if (args[i] === '--jquery') {
      option.jquery = true;
    } else if (args[i] === '--latedef') {
      option.latedef = true;
    } else if (args[i] === '--laxbreak') {
      option.laxbreak = true;
    } else if (args[i] === '--loopfunc') {
      option.loopfunc = true;
    } else if (args[i].match(/^--maxerr(?:=(.+))?/)) {
      if (RegExp.$1 !== '') {
        option.maxerr = parseInt(RegExp.$1, 10);
      } else {
        option.maxerr = parseInt(process.argv[++i], 10);
      }
    } else if (args[i].match(/^--maxlen(?:=(.+))?/)) {
      if (RegExp.$1 !== '') {
        option.maxlen = parseInt(RegExp.$1, 10);
      } else {
        option.maxlen = parseInt(process.argv[++i], 10);
      }
    } else if (args[i] === '--newcap') {
      option.newcap = true;
    } else if (args[i] === '--noarg') {
      option.noarg = true;
    } else if (args[i] === '--node') {
      option.node = true;
    } else if (args[i] === '--noempty') {
      option.noempty = true;
    } else if (args[i] === '--nonew') {
      option.nonew = true;
    } else if (args[i] === '--nomen') {
      option.nomen = true;
    } else if (args[i] === '--on') {
      option.on = true;
    } else if (args[i] === '--onevar') {
      option.onevar = true;
    } else if (args[i] === '--passfail') {
      option.passfail = true;
    } else if (args[i] === '--plusplus') {
      option.plusplus = true;
    } else if (args[i] === '--prototypejs') {
      option.prototypejs = true;
    } else if (args[i] === '--regexp') {
      option.regexp = true;
    } else if (args[i] === '--rhino') {
      option.rhino = true;
    } else if (args[i] === '--undef') {
      option.undef = true;
    } else if (args[i] === '--safe') {
      option.safe = true;
    } else if (args[i] === '--shadow') {
      option.shadow = true;
    } else if (args[i] === '--windows') {
      option.windows = true;
    } else if (args[i] === '--strict') {
      option.strict = true;
    } else if (args[i] === '--sub') {
      option.sub = true;
    } else if (args[i] === '--white') {
      option.white = true;
    } else if (args[i] === '--widget') {
      option.widget = true;
    } else if (args[i].match(/^-/)) {
      print('unknown option: ' + args[i]);
      exit(1);
    } else {
      filename = args[i];
    }
  }
  if (filename === null) {
    usage();
  }
  readfile(filename, function(err, data) {
    if (err) {
      throw err;
    }
    var ok = JSHINT(data, option);
    if (ok) {
      return;
    }
    var errors = JSHINT.errors;
    var i;
    for (i = 0; i < errors.length; ++i) {
      var e = errors[i];
      if (e.reason.match(/^(Stopping|Too many errors)/)) {
        break;
      }
      print([filename, e.line, e.character, e.reason].join(':'));
    }
  });
}

main();
