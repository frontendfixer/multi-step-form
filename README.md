# React Template using Vite.Js

React Boilerplate using `Vite` , `Prettier`, `Eslint`, `Stylelint`, `SASS` and `SVGO`

---

## Table of Contents

### Official Resources

- [Vite Documentation](https://vitejs.dev/)
- [React](https://react.dev/learn)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/docs/latest/use/getting-started)
- [Stylelint](https://stylelint.io/user-guide/get-started/)
- [SASS](https://sass-lang.com/documentation/)

## Get Started

```bash
# clone the official repository
git clone https://github.com/frontendfixer/vite_react_boilerplate.git
cd vite_react_boilerplate

# install all packages using your favorites node installer
pnpm install
# if you wish to use yarn then delete 'pnpm-lock.yaml' and
yarn install
```

## Features

1. **SASS** as css preprocessor
1. **Terser** to minify JS
1. **SVGO** for svg minification
1. **ESLint** for JS/JSX linting

---

## Scripts

```json
"dev": "vite",
"build": "vite build",
"preview": "vite preview",
"lint:eslint": "eslint . --ext .js,.jsx",
"fix:eslint": "eslint --fix  . --ext .js,.jsx",
"lint:stylelint": "stylelint ./src/**/*.{css,scss,jsx}",
"fix:stylelint": "stylelint --fix  ./src/**/*.{css,scss,jsx}"
```

- you can run those scripts by terminal command
  - start dev server
    ```bash
    pnpm run dev
    ```
  - start preview build
    ```bash
    pnpm run preview
    ```
  - eslint
    ```bash
    # start eslint
    pnpm run lint:eslint
    # fix all fixable problems
    pnpm run fix:eslint
    ```
  - stylelint
    ```bash
    # start stylelint
    pnpm run lint:stylelint
    # fix all fixable problems
    pnpm run fix:stylelint
    ```

---

## Settings

If you'd like to overwrite **_vite_** or **_prettier_** or **_eslint_** or **_stylelint_** settings, you can add the rules in [vite.config.js](#vite-config) , [.prettierrc.json](#prettier-config) , [.eslintrc.json](#eslint-config) , [.stylelintrc.json](#stylelint-config) respectively.

### vite config

- **plugins**

  ```js
  import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
  import svgr from 'vite-plugin-svgr';

  // add those plugins
  plugins: [ViteImageOptimizer(), svgr()];
  ```

  - [_vite-plugin-image-optimizer_](https://github.com/FatehAK/vite-plugin-image-optimizer) is useful for svg minification
  - [_vite-plugin-svgr_](https://github.com/pd4d10/vite-plugin-svgr) is used to create ReactComponent for any images/logo

  ```js
  import { ReactComponent as Logo } from './logo.svg';
  ```

- **settings**
  - By default server and preview port are **5555** and **8888** you can change it here
    ```js
    server: {
      port: 5555,
    }
    preview: {
      port: 8080,
    },
    ```
  - sourcemap and code split is enable for css and js
    ```js
    build: {
    cssCodeSplit: true,
    sourcemap: true,
    },
    ```

### prettier config

```json
{
  "trailingComma": "es5",
  "arrowParens": "avoid",
  "printWidth": 80,
  "quoteProps": "as-needed",
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "bracketSameLine": false,
  "bracketSpacing": true,
  "jsxSingleQuote": false
}
```

### eslint config

- **plugins**
  - [_Airbnb_](https://github.com/airbnb/javascript) JavaScript Style Guide
  ```json
  "extends": [,
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "jsx-a11y",
    "prettier",
    "unused-imports"
  ]
  ```
- **rules**
  you can change any rule define here

  ```json
  "rules": {

  },

  // some default reules is overwritten you can take a look at here or completely remove it
  "overrides": [
    {
      "files": ["src/**/*.{js,jsx}"],
      "rules": {

      }
    }
  ]
  ```

### stylelint config

- **plugins**
  ```json
  "plugins": [
    // change all color format to either hsl or rgb
    "stylelint-color-format",
    // convert all px value to rem(base 16)
    "stylelint-rem-over-px"
  ]
  ```
  more details here
  - [_stylelint-color-format_](https://github.com/filipekiss/stylelint-color-format)
  - [_stylelint-rem-over-px_](https://github.com/a-tokyo/stylelint-rem-over-px)
    - I have disabled it for SCSS function `rem()` I had created. You can enable it here
    ```json
    "rules": {
      "rem-over-px/rem-over-px": false,
      // "rem-over-px/rem-over-px": [true, { "ignore": "1px", "ignoreFunctions": ["url"] , "ignoreAtRules": ["media"], fontSize: 16 }],
    }
    ```
