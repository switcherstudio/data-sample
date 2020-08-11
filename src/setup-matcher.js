expect.extend({
  sqlFirstRowResultColumn(results, expected) {
    resultMsg = (msg) => `${msg}\nResults:\n${JSON.stringify(results, null, 4)}`;

    if (!Array.isArray(results)) {
      return {
        message: () =>
          `Query should return an array. Results: ${results}`,
        pass: false
      }
    }

    if (results.length === 0) {
      return {
        message: () => resultMsg(`Query should return at least one row.`),
        pass: false
      }
    }

    const row = results[0];

    if (!('result' in row)) {
      return {
        message: () => resultMsg(`Query should return at a column name 'result'.`),
        pass: false
      }
    }

    const result = row['result'];
    const pass = result === expected;

    if (pass) {
      return {
        message: () => `expected ${result} to be ${expected}`,
        pass: true
      }
    } else {
      return {
        message: () => resultMsg(`expected ${result} to be ${expected}.`),
        pass: false
      }
    }
  }
});
