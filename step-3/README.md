# Step 3

Adding setup for the tests and the finishing the tests

## Steps

1. We will add setup that will run before each test and will create for us a valid date variable:

```javascript
let baseDate;

beforeEach(function () {
    baseDate = new Date('2010-01-01T00:00:00.000Z');
});
```

2. Write the test!
