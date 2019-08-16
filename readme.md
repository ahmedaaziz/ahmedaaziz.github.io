/**********************/
   SCSS FILE STRUCTURE 
/**********************/

1.utils --> contains the third-party utilities such normalize     or reset css

2.Helpers --> contains sass file with project helpers such        functions, variables, typography, mixins

3.Component --> contains sass files with components style like    buttons, tables, typography, colors, grid system


4.Layout --> contains the style of project pages

5.main.scss --> this file will be imported by all of these files above, to compile to one minified css file

Note: any partial scss file should be named with _ underscore sign to tell compile to do not compile this single file 
and compile the imported files only


