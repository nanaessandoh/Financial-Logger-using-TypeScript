// Install TypeScript
open terminal and use nodejs to install TypeScript
-- npm install -g typeScript


// Better workflow using ts.config
tsc --init 


// Go inside and tsconfig.json and uncomment the lines and make these changes
"outDir": "./public",           /* Redirect output structure to the directory. */
"rootDir": "./scr",             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */

// Add this before the last brace
  "include": ["src"]
  
   
// run
tsc -w