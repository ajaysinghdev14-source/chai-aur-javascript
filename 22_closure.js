function startCompany() {
  function ca(name) {
    return `Name of the company is ${name}`;
  }
  return ca;
}

const getMeACompany = startCompany();
const myCompanyName = getMeACompany("mike");
console.log(myCompanyName);

function eternal(guest) {
  const guestName = guest;
  let count = 0;

  function zomato() {
    console.log(`Hi ${guestName}, from zomato`);
  }

  function blinkit() {
    if (count === 1) return;
    console.log(`Hi ${guestName}, from blinkit`);
    count++;
  }

  //   zomato();
  //   blinkit();

  return {
    zomato,
    blinkit,
  };
}

const hitesh = eternal("hitesh");
const piyush = eternal("piyush");

hitesh.blinkit();
hitesh.blinkit();
hitesh.blinkit();

const cups = ["green", "blue", "red"];
