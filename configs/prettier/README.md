<<<<<<< HEAD
# Prettier config🚩


### This npm package include prettier config for your code.

📃Prettier config needed for formating your code
=======
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

#### Script
You need to add script on your <b>package.json</b>  


```
    "format": "prettier --write \"*.js\"",
    "format:fix": "prettier --write \"*.js\" --fix",
```


>>>>>>> f0df0e6 (fix configs & added documentation for prettier & stylelint)
