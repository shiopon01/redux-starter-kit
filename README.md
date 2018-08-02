This repository is React/Redux starter kit.

Recently, SPA of one page is very few. Therefore, `redux-starter-kit` supported to **react-router**.

## Project Structure

The project structure presented in this template is module structure, where functionality is grouped primarily by feature rather than file type.

```
.
├── public                                  # Static public assets (not imported anywhere in source code)
├── src                                     # Application source code
│   ├── index.js                            # Main render
│   ├── reducers.js                         # Combine Reducers for Main render
│   ├── registerServiceWorker.js            # offline cache https://goo.gl/KwvDNy
│   ├── utils                               # Small functions (as helper)
│   │   ├── logo.svg                        # React icon svg
│   │   ├── consts.js                       # Your environment variables
│   │   └── injectStyle.js                  # You can use `@keyframes` by this function
│   └── app                                 # Application main sources
│        ├── App.js                         # Routing
│        └── home                           # Route
│             ├── index.js                  # Root Container (Connecter)
│             ├── Home.js                   # Root Component
│             ├── components                # Global Reusable Components
│             ├── containers                # Global Reusable Container Components
│             └── modules                   # Main action logic files (include Action, Reducer, Action Creator)
│                  ├── reducers.js          # Combine Reducers for Main render
│                  ├── todos.js             # Functions such as `ADD_TODO`
│                  ├── todos.spec.js        # Unit test
│                  └── visibilityFilter.js  # Filter function
└── LICENSE                                 # License is MIT
```

I will modify the structure diagram in the near future.

![structure](https://raw.githubusercontent.com/shiopon01/redux-starter-kit/images/structure.jpg)

I feel that all application include API requests. So I included 'redux-thunk' in this repository. (And, 'redux-logger' :D)

## Supplement

This application depends on the `react-script`. However, if you are not satisfied then please run `npm run eject`.

- If you find an ENOSPC error when you run `yarn test` anymore
  - run `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`