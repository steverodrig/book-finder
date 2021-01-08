const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googleBooks"
  );

  const bookSeed = [
    {
        authors: ["Suzanne Collins"],
        description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
        image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        title: "The Hunger Games"
    },
    {
        authors: ["Stephen King"],
        description: "This is the way the world ends: with a nanosecond of computer error in a Defense Department laboratory and a million casual contacts that form the links in a chain letter of death. And here is the bleak new world of the day after: a world stripped of its institutions and emptied of 99 percent of its people. A world in which a handful of panicky survivors choose sides -- or are chosen. A world in which good rides on the frail shoulders of the 108-year-old Mother Abigail -- and the worst nightmares of evil are embodied in a man with a lethal smile and unspeakable powers: Randall Flagg, the dark man." ,
        image: "https://images3.penguinrandomhouse.com/cover/9780593314012?height=295&alt=cover_coming_soon.jpg",
        link: "https://www.google.com/books/edition/The_Stand/UbfnTcmkaKkC?hl=en&gbpv=0",
        title: "The Stand",
    },
    {
        authors: ["Cormac McCarthy"],
        description: "The Road is the profoundly moving story of a journey. It boldly imagines a future in which no hope remains, but in which the father and his son, 'each the other's world entire,' are sustained by love. Awesome in the totality of its vision, it is an unflinching meditation on the worst and the best that we are capable of: ultimate destructiveness, desperate tenacity, and the tenderness that keeps two people alive in the face of total devastation",
        image: "https://images-na.ssl-images-amazon.com/images/I/41YmTUQixFL._AC_SY400_.jpg",
        link: "https://www.google.com/books/edition/The_Road/PfmjWho_zOAC?hl=en&gbpv=0",
        title: "The Road",
    },
    {
        authors: ["Ken Kesey"],
        description: "Boisterous, ribald, and ultimately shattering, Ken Kesey’s 1962 novel has left an indelible mark on the literature of our time. Now in a new deluxe edition with a foreword by Chuck Palahniuk and cover by Joe Sacco, here is the unforgettable story of a mental ward and its inhabitants, especially the tyrannical Big Nurse Ratched and Randle Patrick McMurphy, the brawling, fun-loving new inmate who resolves to oppose her. We see the struggle through the eyes of Chief Bromden, the seemingly mute half-Indian patient who witnesses and understands McMurphy’s heroic attempt to do battle with the powers that keep them all imprisoned.",
        image: "https://www.google.com/books/edition/One_Flew_Over_the_Cuckoo_s_Nest/wCP2qgXwXdUC?hl=en&gbpv=0",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFXJogSS_Rh_WqogXce174OLVO5qlO09hHqEUh0-C8u3qz8xapgisntBAUk1d3mUeptpiXgg&usqp=CAc",
        title: "One Flew Over the Cuckoo's Nest",
    }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });