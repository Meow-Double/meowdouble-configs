# Stylelint config👔

### This npm package include stylelint config for your css styles.

✅Support for css rules  
✅Support for scss rules
</br>

#### Install

Use this command to set the stylelint configure

```
npm i -D @meow-double/stylelint
```

</br>

> ℹ️INFO  
> Add the npm package as a dev dependency

</br>

#### How use

1. Create a file named <b>.stylelintrc</b> in the root of the directory

2. Specify the extension of your file <b>(js, cjs)</b>

3. <b>Import</b> the stylelint configuration and <b>export</b> it externally properly
   </br>

#### Example of use

For <b>.js</b> files

```
import { stylelint } from "@meow-double/stylelint";

/** @type {import('stylelint').Config} */
export default stylelint({});
```

For <b>.cjs</b> files

```
const {stylelint} = require("@meow-double/stylelint");

/** @type {import('stylelint').Config} */
module.exports = stylelint({});
```

The stylelint config is a function that returns a finished config. This allows you to customize part of your config to your needs

</br>

#### Transmitted parameters

<b>All arguments are passed as properties of the object</b>
</br>

| Argument | Available values      | Description |
|----------|----------------------|------------|
| scss |`true` \| `false` | Adds a set of rules for scss using **stylelint-config-standard-scss** |
| rules |`Object` | Allows you to reuse the rules for a config. Supports rules of built-in plugins  |

</br>

**All plugins**

```
    "stylelint-config-idiomatic-order": "^10.0.0",
    "stylelint-config-standard": "^38.0.0",
    "stylelint-config-standard-scss": "^15.0.0"
```
> ℹ️INFO  
> These dependencies do not need to be installed, they are installed together with the configure

**Example**

```
{
    scss:true,
    rules:{
      'selector-attribute-quotes': 'never',
      'comment-whitespace-inside': 'always',
    }
}

```

#### Script

You need to add script on your <b>package.json</b>

**For Css**

```
    "lint:css": "stylelint \"**/*.css\"",
    "lint:css:fix": "stylelint \"**/*.css\" --fix",
```


**For Scss**

```
    "lint:css": "stylelint \"**/*.scss\"",
    "lint:css:fix": "stylelint \"**/*.scss\" --fix",
```

**For Scss & Css**

```
    "lint:css": "stylelint \"**/*.{scss,css}\"",
    "lint:css:fix": "stylelint \"**/*.{scss,css}\" --fix",
```

