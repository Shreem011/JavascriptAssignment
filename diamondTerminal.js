function printDiamond(n) {
  if (n % 2 === 0) {
    n++;
  }

  const mid = Math.floor(n / 2);

  for (let i = 0; i < n; i++) {
    const spaces = Math.abs(mid - i);
    const stars = n - 2 * spaces;

    let line = " ".repeat(spaces) + "*".repeat(stars);

    console.log(line);
  }
}

const size = 7;
printDiamond(size);
