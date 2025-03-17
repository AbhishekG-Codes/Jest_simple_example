npm install --save-dev ts-jest  @jest/globals
npx ts-jest config:init

# in package.json

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

replace above test with 

```
"scripts": {
    "test": "jest"
  }
```