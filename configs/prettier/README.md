# Prettier config🚩


### This npm package include prettier config for your code.

📃Prettier config needed for formating your code


#### Install
Use this command to set the stylelint configure

```
npm i -D @meow-double/prettier
```
</br>

> ℹ️INFO  
> Add the npm package as a dev dependency

</br>

#### How use
1. Create a file named <b>.prettierrc</b> in the root of the directory 

2. Specify the extension of your file <b>(js, cjs)</b>

3. <b>Import</b> the prettier configuration and <b>export</b> it externally properly
</br>

#### Example of use


For <b>.js</b> files  
```
import { prettier } from "@meow-double/prettier";

/** @type {import('prettier').Config} */
export default prettier;
```

For <b>.cjs</b> files  
```
const {prettier} = require("@meow-double/prettier");

/** @type {import('prettier').Config} */
module.exports = prettier;
```
</br>

### Script
You need to add script on your <b>package.json</b>  


**For JS**

```
    "format": "prettier --write \"*.{js,jsx}\"",
    "format:fix": "prettier --write \"*.{js,jsx}\" --fix",
```

**For TS**

```
    "format": "prettier --write \"*.{ts,tsx}\"",
    "format:fix": "prettier --write \"*.{ts,tsx}\" --fix",
```


