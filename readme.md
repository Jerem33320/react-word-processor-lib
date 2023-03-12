# React Word Compressor Library

## Available Scripts

### Build the library

```
npm run rollup
```

### Publish the library

```
npm publish
```

### Run tests

```
npm run test
```

### Run storybook locally

```
npm run storybook
```

### Build storybook

```
npm run build-storybook
```

Architecture of the project:

```
.
├── src
│   ├── components
|   │   ├── Button
|   |   │   ├── Button.tsx
|   |   │   └── index.ts
|   │   └── index.ts
│   └── index.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── rollup.config.js
```

If npmrc values are OK and github is configured, you can publish your lib on github:

```
npm publish
```

Finally we need to update the _version number_ in our `package.json` file. Remember we are publishing a package so when we make changes, we need to ensure we don't impact users of previous versions of our library. Every time we publish we should increment the version number:

`package.json`

```json
{
  "version": "0.0.2",
  ...
}
```

Create Storybook:

```bash
npx sb init
```

✔ Do you want to run the 'npm7' migration on your project? … no
Skipping the npm7 migration.

If you change your mind, run 'npx storybook@next automigrate'

Now run these commands:

```bash
npm run rollup
npm publish
```
