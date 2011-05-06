
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
option_parser.add_option('  --regexp       true, if the . should not be allowed in regexp literals');
option_parser.add_option('  --rhino        true, if the Rhino environment globals should be predefined');
option_parser.add_option('  --undef        true, if variables should be declared before used');
option_parser.add_option('  --shadow       true, if variable shadowing should be tolerated');
option_parser.add_option('  --strict       true, require the "use strict"; pragma');
option_parser.add_option('  --sub          true, if all forms of subscript notation are tolerated');
option_parser.add_option('  --supernew     true, if `new function () { ... };` and `new Object;` should be tolerated');
option_parser.add_option('  --white        true, if strict whitespace rules apply');
option_parser.add_option('  --wsh          true, if the Windows Scripting Host environment globals should be predefined');

function main() {
  var args, filename, data, noerror, i;
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
  noerror = JSHINT(data, args.opts);
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
