Prettifies JavaScript on nodejs


It's as simple as:

```
var formatter, fs, source, out;

formatter = require('./atropa-jsformatter.js');
fs = require('fs');


source = fs.readFileSync('./example messy code.js', 'utf8');

out = formatter(source);

console.log(out);
```


Install it from npm

`npm install atropa-jsformatter`

