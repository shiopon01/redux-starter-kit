# WIP

# WIP

# WIP

This repository is React/Redux starter kit.

Recently, SPA of one page is very few. Therefore, `redux-starter-kit` supported to **react-router**.

## Project Structure

The project structure presented in this template is module structure, where functionality is grouped primarily by feature rather than file type.

```
.
├── public                             # static public assets (not imported anywhere in source code)
├── src                                # application source code
│   ├── index.js                       # main render
│   ├── reducers.js                    # combine Reducers
│   ├── registerServiceWorker.js       # Offline cache https://goo.gl/KwvDNy
│   ├── share                          # share Components
│   │   └── Header.js                  # page header
│   ├── utils                          # convenient things
│   │   ├── logo.svg                   # React icon
│   │   ├── consts.js                  # your ENV
│   │   └── injectStyle.js             # you can use `@keyframes`
│   └── app                            # application main sources
│        ├── App.js                    # application routing
│        ├── home                      # [home] `localhost:3000/`
│        │   ├── index.js              # [home] main Container
│        │   └── Home.js               # [home] main Component
│        └── todo                      # [todo] `localhost:3000/todo`
│             ├── index.js             # [todo] main Container
│             ├── Home.js              # [todo] main Component
│             ├── components           # [todo] Components
│             ├── containers           # [todo] Container Components
│             └── modules              # [todo] main action logic files (include in `Action`, `Reducer`, `Action Creator`)
│                  ├── reducers.js     # [todo] combine Reducers
│                  ├── todos.js        # [todo] todo module
│                  └── todos.spec.js   # [todo] todo module unit test
└── LICENSE                            # License is MIT
```

I feel that all application include API requests. So I included 'redux-thunk' in this repository. (and, `redux-logger` )

## Supplement

This application depends on the `react-script`. However, if you are not satisfied then please run `npm run eject`.

- If you want to unit test.
  - run `yarn test`
- If you want to execute eslint and prettier.
  - run `yarn fix`
- If you find an ENOSPC error when you run `yarn test` anymore
  - run `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`