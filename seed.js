const db = require("./server/db/database");
const { User, Log } = require("./server/db/models");
const { green, red } = require("chalk");

const seed = async () => {
  try {
    await db.sync({ force: true });
    console.log("db synced!");

    //User seeding
    const users = [
      {
        firstName: "Kay",
        lastName: "Xp",
        email: "kay@xp.com",
        password: "picful",
      },
    ];
    const [kay] = await User.bulkCreate(users);
    console.log(green("Seeded users!"));

    //Log seeding
    const logs = [
      {
        date: "2020-07-10",
        imageUrl: "/seedpics/flowers.jpeg",
        description: "Neighborhood flowers",
        userId: kay.id,
      },
      {
        date: "2020-07-16",
        imageUrl: "/seedpics/bbqchicken.jpeg",
        description: "Korean bbq in the city",
        userId: kay.id,
      },
      {
        date: "2020-07-25",
        imageUrl: "/seedpics/farmersmarket.jpeg",
        description: "Stumbling across a farmers market in brooklyn",
        userId: kay.id,
      },
    ];
    await Log.bulkCreate(logs);
    console.log(green("Seeded logs!"));
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh no! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
