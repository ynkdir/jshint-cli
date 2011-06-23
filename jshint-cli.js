
var option_parser = new optspec.OptionParser('jshint [options] file');
option_parser.add_option('  -h, --help     show this help message and exit');
option_parser.add_option('  --asi          true, if automatic semicolon insertion should be tolerated');
option_parser.add_option('  --bitwise      true, if bitwise operators should not be allowed');
option_parser.add_option('  --boss         true, if advanced usage of assignments and == should be allowed');
option_parser.add_option('  --browser      true, if the standard browser globals should be predefined');
option_parser.add_option('  --couch        true, if CouchDB globals should be predefined');
option_parser.add_option('  --curly        true, if curly braces around blocks should be required (even in if/for/while)');
option_parser.add_option('  --debug        true, if debugger statements should be allowed');
option_parser.add_option('  --devel        true, if logging should be allowed (console, alert, etc.)');
option_parser.add_option('  --dojo         true, if Dojo Toolkit globals should be predefined');
option_parser.add_option('  --eqeqeq       true, if === should be required');
option_parser.add_option('  --eqnull       true, if == null comparisons should be tolerated');
option_parser.add_option('  --es5          true, if ES5 syntax should be allowed');
option_parser.add_option('  --evil         true, if eval should be allowed');
option_parser.add_option('  --expr         true, if ExpressionStatement should be allowed as Programs');
option_parser.add_option('  --forin        true, if for in statements need not filter');
option_parser.add_option('  --globalstrict  true, if global "use strict"; should be allowed (also enables \'strict\'');
option_parser.add_option('  --fragment     true, if HTML fragments should be allowed');
option_parser.add_option('  --immed        true, if immediate invocations must be wrapped in parens');
option_parser.add_option('  --indent=NUMBER  the indentation factor');
option_parser.add_option('  --jquery       true, if jQuery globals should be predefined');
option_parser.add_option('  --latedef      true, if the use before definition should not be tolerated');
option_parser.add_option('  --laxbreak     true, if line breaks should not be checked');
option_parser.add_option('  --loopfunc     true, if functions should be allowed to be defined within loops');
option_parser.add_option('  --maxerr=NUMBER  the maximum number of errors to allow');
option_parser.add_option('  --maxlen=NUMBER  the maximum length of a source line');
option_parser.add_option('  --mootools     true, if MooTools globals should be predefined');
option_parser.add_option('  --newcap       true, if constructor names must be capitalized');
option_parser.add_option('  --noarg        true, if arguments.caller and arguments.callee should be disallowed');
option_parser.add_option('  --node         true, if Node.js globals should be predefined');
option_parser.add_option('  --noempty      true, if empty blocks should be disallowed');
option_parser.add_option('  --nonew        true, if using `new` for side-effects should be disallowed');
option_parser.add_option('  --nomen        true, if names should be checked');
option_parser.add_option('  --onevar       true, if only one var statement per function should be allowed');
option_parser.add_option('  --passfail     true, if the scan should stop on first error');
option_parser.add_option('  --plusplus     true, if increment/decrement should not be allowed');
option_parser.add_option('  --prototypejs  true, if Prototype and Scriptaculous globals should be predefined');
option_parser.add_option('  --regexdash    true, if unescaped last dash (-) inside brackets should be tolerated');
option_parser.add_option('  --regexp       true, if the . should not be allowed in regexp literals');
option_parser.add_option('  --rhino        true, if the Rhino environment globals should be predefined');
option_parser.add_option('  --undef        true, if variables should be declared before used');
option_parser.add_option('  --scripturl    true, if script-targeted URLs should be tolerated');
option_parser.add_option('  --shadow       true, if variable shadowing should be tolerated');
option_parser.add_option('  --strict       true, require the "use strict"; pragma');
option_parser.add_option('  --sub          true, if all forms of subscript notation are tolerated');
option_parser.add_option('  --supernew     true, if `new function () { ... };` and `new Object;` should be tolerated');
option_parser.add_option('  --trailing     true, if trailing whitespace rules apply');
option_parser.add_option('  --white        true, if strict whitespace rules apply');
option_parser.add_option('  --wsh          true, if the Windows Scripting Host environment globals should be predefined');

function _isArray(o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}

function geterrors() {
  var data = JSHINT.data();
  var errors = [];
  var i, j, e, lines;

  if (data.errors) {
    for (i = 0; i < data.errors.length; ++i) {
      e = data.errors[i];
      if (e) {
        errors.push({
          line: e.line,
          col: e.character,
          message: e.reason
        });
      }
    }
  }

  if (data.unused) {
    for (i = 0; i < data.unused.length; ++i) {
      e = data.unused[i];
      lines = _isArray(e.line) ? e.line : [e.line];
      for (j = 0; j < lines.length; ++j) {
        errors.push({
          line: lines[j],
          col: 0,
          message: 'Unused variable: ' + e.name
        });
      }
    }
  }

  if (data.implieds) {
    for (i = 0; i < data.implieds.length; ++i) {
      e = data.implieds[i];
      lines = _isArray(e.line) ? e.line : [e.line];
      for (j = 0; j < lines.length; ++j) {
        errors.push({
          line: lines[j],
          col: 0,
          message: 'Implied global: ' + e.name
        });
      }
    }
  }

  errors.sort(function(a, b) {
    if (a.line < b.line) { return -1; }
    else if (a.line > b.line) { return 1; }
    else if (a.col < b.col) { return -1; }
    else if (a.col > b.col) { return 1; }
    return 0;
  });

  return errors;
}

function main() {
  var args, filename, data, errors, i, e;
  try {
    args = option_parser.parse_args(getargs());
  } catch (ex) {
    print(ex.message);
    exit(1);
  }
  if (args.opts.help || args.args.length === 0) {
    print(option_parser.format_help());
    exit(0);
  }
  filename = args.args[0];
  data = readfile(filename, 'utf-8');
  JSHINT(data, args.opts);
  errors = geterrors();
  for (i = 0; i < errors.length; ++i) {
    e = errors[i];
    print([filename, e.line, e.col, e.message].join(':'));
  }
}

main();
