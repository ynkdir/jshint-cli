
function usage() {
  print('jshint [options] file');
  print('options:');
  print('  --help');
  print('  --asi        true, if automatic semicolon insertion should be tolerated');
  print('  --bitwise    true, if bitwise operators should not be allowed');
  print('  --boss       true, if advanced usage of assignments and == should be allowed');
  print('  --browser    true, if the standard browser globals should be predefined');
  print('  --couch      true, if CouchDB globals should be predefined');
  print('  --curly      true, if curly braces around blocks should be required (even in if/for/while)');
  print('  --debug      true, if debugger statements should be allowed');
  print('  --devel      true, if logging should be allowed (console, alert, etc.)');
  print('  --eqeqeq     true, if === should be required');
  print('  --eqnull     true, if == null comparisons should be tolerated');
  print('  --es5        true, if ES5 syntax should be allowed');
  print('  --evil       true, if eval should be allowed');
  print('  --expr       true, if ExpressionStatement should be allowed as Programs');
  print('  --forin      true, if for in statements need not filter');
  print('  --globalstrict true, if global "use strict"; should be allowed (also enables \'strict\'');
  print('  --fragment   true, if HTML fragments should be allowed');
  print('  --immed      true, if immediate invocations must be wrapped in parens');
  print('  --jquery     true, if jQuery globals should be predefined');
  print('  --latedef    true, if the use before definition should not be tolerated');
  print('  --laxbreak   true, if line breaks should not be checked');
  print('  --loopfunc   true, if functions should be allowed to be defined within loops');
  print('  --mootools   true, if MooTools globals should be predefined');
  print('  --newcap     true, if constructor names must be capitalized');
  print('  --noarg      true, if arguments.caller and arguments.callee should be disallowed');
  print('  --node       true, if Node.js globals should be predefined');
  print('  --noempty    true, if empty blocks should be disallowed');
  print('  --nonew      true, if using `new` for side-effects should be disallowed');
  print('  --nomen      true, if names should be checked');
  print('  --onevar     true, if only one var statement per function should be allowed');
  print('  --passfail   true, if the scan should stop on first error');
  print('  --plusplus   true, if increment/decrement should not be allowed');
  print('  --prototypejs true, if Prototype and Scriptaculous globals shoudl be predefined');
  print('  --regexp     true, if the . should not be allowed in regexp literals');
  print('  --rhino      true, if the Rhino environment globals should be predefined');
  print('  --undef      true, if variables should be declared before used');
  print('  --shadow     true, if variable shadowing should be tolerated');
  print('  --strict     true, require the "use strict"; pragma');
  print('  --sub        true, if all forms of subscript notation are tolerated');
  print('  --supernew   true, if `new function () { ... };` and `new Object;` should be tolerated');
  print('  --white      true, if strict whitespace rules apply');
  print('  --indent=N   the indentation factor');
  print('  --maxerr=N   the maximum number of errors to allow');
  print('  --maxlen=N   the maximum length of a source line');
  exit(0);
}

function parse_arguments(args) {
  var res = {
    args: [],
    option: {}
  };
  var i;
  for (i = 0; i < args.length; ++i) {
    if (args[i] === '-h' || args[i] === '--help') {
      usage();
    } else if (args[i] === '--asi') {
      res.option.asi = true;
    } else if (args[i] === '--bitwise') {
      res.option.bitwise = true;
    } else if (args[i] === '--boss') {
      res.option.boss = true;
    } else if (args[i] === '--browser') {
      res.option.browser = true;
    } else if (args[i] === '--couch') {
      res.option.couch = true;
    } else if (args[i] === '--debug') {
      res.option.debug = true;
    } else if (args[i] === '--devel') {
      res.option.devel = true;
    } else if (args[i] === '--eqeqeq') {
      res.option.eqeqeq = true;
    } else if (args[i] === '--eqnull') {
      res.option.eqnull = true;
    } else if (args[i] === '--es5') {
      res.option.devel = true;
    } else if (args[i] === '--evil') {
      res.option.evil = true;
    } else if (args[i] === '--expr') {
      res.option.expr = true;
    } else if (args[i] === '--forin') {
      res.option.forin = true;
    } else if (args[i] === '--globalstrict') {
      res.option.globalstrict = true;
    } else if (args[i] === '--fragment') {
      res.option.fragment = true;
    } else if (args[i] === '--immed') {
      res.option.immed = true;
    } else if (args[i] === '--jquery') {
      res.option.jquery = true;
    } else if (args[i] === '--latedef') {
      res.option.latedef = true;
    } else if (args[i] === '--laxbreak') {
      res.option.laxbreak = true;
    } else if (args[i] === '--loopfunc') {
      res.option.loopfunc = true;
    } else if (args[i] === '--mootools') {
      res.option.mootools = true;
    } else if (args[i] === '--newcap') {
      res.option.newcap = true;
    } else if (args[i] === '--noarg') {
      res.option.noarg = true;
    } else if (args[i] === '--node') {
      res.option.node = true;
    } else if (args[i] === '--noempty') {
      res.option.noempty = true;
    } else if (args[i] === '--nonew') {
      res.option.nonew = true;
    } else if (args[i] === '--nomen') {
      res.option.nomen = true;
    } else if (args[i] === '--onevar') {
      res.option.onevar = true;
    } else if (args[i] === '--passfail') {
      res.option.passfail = true;
    } else if (args[i] === '--plusplus') {
      res.option.plusplus = true;
    } else if (args[i] === '--prototypejs') {
      res.option.prototypejs = true;
    } else if (args[i] === '--regexp') {
      res.option.regexp = true;
    } else if (args[i] === '--rhino') {
      res.option.rhino = true;
    } else if (args[i] === '--undef') {
      res.option.undef = true;
    } else if (args[i] === '--shadow') {
      res.option.shadow = true;
    } else if (args[i] === '--strict') {
      res.option.strict = true;
    } else if (args[i] === '--sub') {
      res.option.sub = true;
    } else if (args[i] === '--supernew') {
      res.option.supernew = true;
    } else if (args[i] === '--white') {
      res.option.white = true;
    } else if (args[i].match(/^--indent(?:=(.+))?/)) {
      if (RegExp.$1 !== '') {
        res.option.indent = parseInt(RegExp.$1, 10);
      } else {
        res.option.indent = parseInt(process.argv[++i], 10);
      }
    } else if (args[i].match(/^--maxerr(?:=(.+))?/)) {
      if (RegExp.$1 !== '') {
        res.option.maxerr = parseInt(RegExp.$1, 10);
      } else {
        res.option.maxerr = parseInt(process.argv[++i], 10);
      }
    } else if (args[i].match(/^--maxlen(?:=(.+))?/)) {
      if (RegExp.$1 !== '') {
        res.option.maxlen = parseInt(RegExp.$1, 10);
      } else {
        res.option.maxlen = parseInt(process.argv[++i], 10);
      }
    } else if (args[i].match(/^-/)) {
      print('unknown option: ' + args[i]);
      exit(1);
    } else {
      res.args.push(args[i]);
    }
  }
  return res;
}

function main() {
  var args, filename, data, noerror, i;
  args = parse_arguments(getargs());
  if (args.args.length === 0) {
    usage();
  }
  filename = args.args[0];
  data = readfile(filename, 'utf-8');
  noerror = JSHINT(data, args.option);
  if (!noerror) {
    for (i = 0; i < JSHINT.errors.length; ++i) {
      var e = JSHINT.errors[i];
      if (e === null) {
        break;
      }
      print([filename, e.line, e.character, e.reason].join(':'));
    }
  }
}

main();
