This repository is React/Redux starter kit.  
Beginners should practice with this.

This application depends on the `react-script`,  
However, if you are not satisfied then please run `npm run eject`.

## Project Structure

The project structure presented in this template is module structure, where functionality is grouped primarily by feature rather than file type.

```
.
├── public                           # Static public assets (not imported anywhere in source code)
├── src                              # Application source code
│   ├── index.js                     # Main render
│   ├── components                   # Global Reusable Components
│   ├── containers                   # Global Reusable Container Components
│   ├── modules                      # Main action logic files (include Action, Reducer, Action Creator)
│   │   ├── reducers.js              # Combine Reducers for Main render
│   │   ├── todos.js                 # Functions such as `ADD_TODO`
│   │   ├── todos.spec.js            # Unit test
│   │   └── visibilityFilter.js      # Filter function
│   └── unit                         # Small functions (as helper)
│       ├── injectStyle.js           # You can use `@keyframes` by this function
│       └── registerServiceWorker.js # offline cache https://goo.gl/KwvDNy
└── LICENSE                          # License is MIT
```

![structure](https://raw.githubusercontent.com/shiopon01/redux-starter-kit/images/structure.jpg)
