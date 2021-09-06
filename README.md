# OpenApi-ApiGenerator

Api service and model generator from OpenApi spec for frontend frameworks like Angular, React, Vue and others.

# TODO

- add option to prefer the usage of object instead of Record
- add option to generate interfaces instead of the classes
- add custom error handlers on the api requests for custom http codes
- add option to generate all models/services in a single file or in multiple files
- add option to parse from url, json or yaml
- add option to generate services for angular, react(axios) and fetch - use a plugin approach
- add option to pipe the ast to a custom parser/generator
- add option to print only the output of the generator - dry-run
- add option to show the array using Array<> or [] syntax
- add option to set AnyValue model as object or record

- autodetect if yaml or json and convert from yaml to json
- add option to generate typescript or javascript (with comments or not or with d.ts) - javascript will generate only classes with d.ts types.
  -- autodetect the type of project - has @angular/axios/etc in the package json then create for them, if multiple are present ask, if none then javascript, should have comprehensive defaults (eg no typescript in package json then use javascript by default, no d.ts needed, only classes, make it as 0 config as possible)

- organize in - factory to create v2 or v3 - builder, generators, parsers - all exposed so they can be piped and customized by others - jest tests\

  - created by section - using nx, typescrit, openapi - created/built for ... - lightweight, scalabel, pipeable - can be used as command line tool from any os (as long as you have node)

- move random projects to ip-random
- delete useless organizations ?
- update readme on my main page - keep only spotlight projects
- create roadmap
- create github project for it

- rules are functions with a const default - always - lazily created? only injected as parameter
