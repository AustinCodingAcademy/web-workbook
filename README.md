[![CircleCI](https://circleci.com/gh/AustinCodingAcademy/web-workbook.svg?style=svg)](https://circleci.com/gh/AustinCodingAcademy/web-workbook)

![](http://en.gravatar.com/userimage/107370100/a08594145564536138dfaaf072c7b241.png)
# Austin Coding Academy
## Web Workbook
### Claiming your workbook
1. Make sure you are signed into GitHub
1. Here's a [video](https://www.youtube.com/embed/CtKQdoHjt6M) explaining how to do it
1. Navigate into the project directory: `cd web-workbook`
1. Run `npm install` in your terminal

### Starting server
1. Run `npm start` in your terminal
1. Navigate to this IP Address in your browser: `http://127.0.0.1:8080`.
1. To break out of your server, press `ctrl` + `c`

### Lint your code
1. Run `npm run lint` in your terminal  
  * HTML Lint checks for HTML Syntax errors (e.g. indentations and tag closures).
  * CSS Lint checks for CSS erros (e.g indentation, tag closures, duplicated properties).
  * ES Lint checks for proper JavaScript syntax (e.g. indentation and default style guide).
1. To avoid Lint errors, be sure to indent with 2 spaces (hitting the space bar twice).
1. If there are no errors, your code has passed the Lint Process.
1. The terminal will say something like this:

```bash
> web-workbook@1.0.0 lint /Users/cLo/Desktop/web-workbook
> htmllint {*.html,./**/*.html} && stylelint ./**/*.css && eslint --config .eslint.json .


[htmllint] found 0 errors out of 18 files
```

### Run tests
#### Tic-Tac-Toe
1. Run `npm test 08week/tic-tac-toe/test.js` in your terminal

#### Towers Of Hanoi
1. Run `npm test 09week/towers-of-hanoi/test.js` in your terminal

<!-- ### Run Challenges
1. `npm test challenges/01challenge/test.js`
1. `npm test challenges/02challenge/test.js` -->
