# Step 2

Let's thing on how and what we should test and write pending tests.

## Steps

1. Create folder `./test` and add the following things to the `package.json` file:

```json
{
    "directories": {
    "test": "test"
  },
  "scripts": {
    "test": "mocha"
  }
}
```

2. Create `describe` for the unit we are testing, in this case `Date`
2. Create `describe` for the function we are testing, in this case `#add`
2. Create `describe` for the "headers" of test types in this case:
    1. Doing things correctly
    1. Validation
    1. Edge cases
2. Write the test as pending.