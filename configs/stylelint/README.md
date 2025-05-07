# Stylelint config👔


### This npm package include stylelint config for your css styles.

✅Support for css rules  
❌Support for scss rules (in proccess) 
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
export default stylelint;
```

For <b>.cjs</b> files  
```
const {stylelint} = require("@meow-double/stylelint");

/** @type {import('stylelint').Config} */
module.exports = stylelint;
```
</br>

#### Script
You need to add script on your <b>package.json</b>  


```
    "lint:css": "stylelint \"**/*.css\"",
    "lint:css:fix": "stylelint \"**/*.css\" --fix",
```
