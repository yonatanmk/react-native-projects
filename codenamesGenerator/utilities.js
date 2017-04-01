export function arrMaker () {
  let num = 9;
  let arr = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
  for (let i = num; i > 0 ; i--) {
    if (arr[0][0] < 5) {
      arr[0][0] += 1;
      arr = shuffle(arr);
    }
    else {
      arr = shuffle(arr);
      i++;
    }
  }
  for (let i = num - 1; i > 0 ; i--) {
    if (arr[0][0] + arr[0][1] < 5) {
      arr[0][1] += 1;
      arr = shuffle(arr);
    }
    else {
      arr = shuffle(arr);
      i++;
    }
  }
  for (let i = 1; i > 0 ; i--) {
    if (arr[0][0] + arr[0][1] < 5) {
      arr[0][2] += 1;
      arr = shuffle(arr);
    }
    else {
      arr = shuffle(arr);
      i++;
    }
  }
  return arr.map((row) => {
    return [...row, 5 - row[0] - row[1] - row[2]];
  });
}

export function shuffle(a) {
  let j, x, i;
  for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
  }
  return a;
}
