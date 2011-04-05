" [JSHINT, The JavaScript Code Quality Tool]
" http://jshint.com/

if exists("current_compiler")
  finish
endif
let current_compiler = "jshint"

CompilerSet makeprg=jshint
      \\ $*
      \\ %

CompilerSet errorformat=
      \%f:%l:%c:%m

