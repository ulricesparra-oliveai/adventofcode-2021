// 1.1
$('body')
  .innerText.split('\n')
  .map(Number)
  .reduce(
    (acc, cur) => {
      if (acc[1] < cur) acc[0]++;
      return [acc[0], cur];
    },
    [-1, 0]
  );

// 1.2
$('body')
  .innerText.split('\n')
  .map(Number)
  .reduce(
    (acc, cur, ind, arr) => {
      const slice = arr.slice(ind, ind + 3);
      if (slice.length === 3) {
        const newSum = slice.reduce((a, b) => a + b);
        if (newSum > acc[1]) acc[0]++;
        return [acc[0], newSum];
      }
      return acc;
    },
    [-1, 0]
  );
