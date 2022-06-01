console.log("person1 : shows tickets");
console.log("person2 : shows tickets");

const preMovie = async () => {
  const promis1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 3000);
  });

  const promis2 = new Promise((resolve, reject) => resolve("popcorn"));
  const promis3 = new Promise((resolve, reject) => resolve("butter"));
  const getColdDrink = new Promise((resolve, reject) => resolve("cold drinks"));

  let ticket = await promis1;

//   let popcorn = await promis2;
//   console.log(popcorn);

//   let butter = await promis3;
//   console.log(butter);

//   let colddrink = await getColdDrink;
//   console.log(colddrink);

  let [popcorn, butter, colddrink] = await Promise.all([
    promis2,
    promis3,
    getColdDrink,
  ]);
  console.log(`${popcorn},${butter},${colddrink}`);
  return ticket;
};
preMovie().then((m) => console.log(m));

console.log("person4 : shows tickets");
console.log("person5 : shows tickets");
