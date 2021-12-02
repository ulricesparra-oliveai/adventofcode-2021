// 2.1
$('body')
  .innerText.split('\n')
  .reduce(
    (acc, cur) => {
      const [dir, val] = cur.split(' ');
      switch (dir) {
        case 'forward':
          acc[0] += Number(val);
          break;
        case 'up':
          acc[1] -= Number(val);
          break;
        case 'down':
          acc[1] += Number(val);
          break;
      }
      return acc;
    },
    [0, 0]
  )
  .reduce((a, b) => a * b);

// 2.2
$('body')
  .innerText.split('\n')
  .reduce(
    (acc, cur) => {
      const [dir, val] = cur.split(' ');
      switch (dir) {
        case 'forward':
          acc[0] += Number(val);
          acc[1] += Number(val) * acc[2];
          break;
        case 'up':
          acc[2] -= Number(val);
          break;
        case 'down':
          acc[2] += Number(val);
          break;
      }
      return acc;
    },
    [0, 0, 0]
  )
  .slice(0, 2)
  .reduce((a, b) => a * b);
