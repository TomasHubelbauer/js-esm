# EcmaScript Modules

[**DEMO**](https://tomashubelbauer.github.io/js-import-external)

This is an experiment in finding out whether the native ES module `import` statement can
import a module from an external resource.

```js
import mod from 'https://cdn.jsdelivr.net/gh/TomasHubelbauer/js-import-external/mod.js';
console.log(mod());
// Prints 'it works'
```

## The Conclusion

It works.

## To-Do
