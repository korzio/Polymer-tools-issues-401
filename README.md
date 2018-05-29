# About

The repo contains a minimal [Polymer](https://github.com/Polymer) project code which fails to analyze `lazy-import` over a `lazy-import` dependency.

# Reproduce

```sh
npm install
(cd my-app && bower install)
npm test
```

=>

```
npm test

> Polymer-tools-issues-401@1.0.0 test /Polymer-tools-issues-401
> node index.js

info: [cli.command.build]    Clearing build/ directory...
Error: stream.push() after EOF
    at readableAddChunk (_stream_readable.js:240:30)
    at PassThrough.Readable.push (_stream_readable.js:208:10)
    at PassThrough.Transform.push (_stream_transform.js:147:32)
    at BuildAnalyzer.dependencyPathAnalyzed (/Polymer-tools-issues-401/node_modules/polymer-cli/node_modules/polymer-build/lib/analyzer.js:424:34)
    at Promise (/Polymer-tools-issues-401/node_modules/polymer-cli/node_modules/polymer-build/lib/analyzer.js:482:45)
    at new Promise (<anonymous>)
    at StreamLoader.<anonymous> (/Polymer-tools-issues-401/node_modules/polymer-cli/node_modules/polymer-build/lib/analyzer.js:475:20)
    at Generator.next (<anonymous>)
    at /Polymer-tools-issues-401/node_modules/polymer-cli/node_modules/polymer-build/lib/analyzer.js:20:71
    at new Promise (<anonymous>)
```