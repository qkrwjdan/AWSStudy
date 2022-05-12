### Nodejs EC2 setting

- install nodejs

```
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install build-essential
```

- install nvm

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

nvm install --lts
```

- install yarn

```
npm install -g yarn
```

- install dependency

```
yarn
```

### ts-express setting

- npm init

```
npm init
```

- install yarn

```
npm install -g yarn
```

- install typescript

```
yarn add typescript ts-node @types/node --dev
```

- make tsconfig

```
tsc --init
```

- edit tsconfig

tsconfig.json

```
{
  "compilerOptions": {
    "target": "es6",
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "skipLibCheck": true,
    "moduleResolution": "node",
    "module": "commonjs",
    "strict": true,
    "pretty": true,
    "sourceMap": true,
    "outDir": "./dist",
    "allowJs": true,
    "esModuleInterop": true,
    "typeRoots": [
      "./src/types/express.d.ts",
      "./node_modules/@types"
    ]
  },
  "include": [
    "./src/**/*"
  ],
  "exclude": [
    "node_modules",
    "tests"
  ]
}
```

- install express

```
yarn add express @types/express
```

- install nodemon

```
yarn add nodemon --dev
```

- edit nodemon config

nodemon.json

```
{
  "watch": ["src", ".env"],
  "ext": "js,ts,json",
  "ignore": ["src/**/*.spec.ts"],
  "exec": "ts-node  --transpile-only ./src/index.ts"
}
```

- add run, build script to package.json

package.json

```
  "scripts": {
    "dev": "nodemon",
    "build": "tsc && node dist"
  },
```
