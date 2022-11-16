const sieve = (num) => {
  const sieved = Array.from({ length: num + 1 }).fill(true);

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (sieved[i] === true) {
      let j = 2;

      while (i * j <= num) {
        sieved[i * j] = false;
        j++;
      }
    }
  }

  return sieved;
};

console.log(sieve(30));
