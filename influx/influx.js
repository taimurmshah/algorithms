const userPurchaseData = [
  {
    timestamp: "2020-03-14 12:35:00Z",
    user: {
      first_name: "john",
      last_name: "doe",
      id: "12uwx",
      last_login: "2020-03-14 12:34:00Z",
    },
    items: [
      {
        sku: "iwuefsd124",
        qty: 12,
        unit_price: 32.24,
      },
      {
        sku: "dfefsd1fd",
        qty: 2,
        unit_price: 10.5,
      },
    ],
  },
  {
    timestamp: "2020-03-13 11:25:01Z",
    user: {
      first_name: "jane",
      last_name: "foo",
      id: "31usx",
      last_login: "2020-03-17 12:34:00Z",
    },
    items: [
      {
        sku: "iwuefsd124",
        qty: 5,
        unit_price: 32.24,
      },
      {
        sku: "d32sd1fd",
        qty: 1,
        unit_price: 11.25,
      },
    ],
  },
];

//each object contains info for a single purchase:
// - purchase timestamp
// user obj
//
//
// array of items bought

//high level steps:
// - somehow track all purchases for user
//   - array of purchase objects on USER

const returnUsersByAmountSpent = (data) => {
  const users = {};

  data.map((d) => {
    //sum the purchase amount
    d.totalAmount = 0;
    d.items.forEach((item) => (d.totalAmount += item.qty * item.unit_price));
  });

  for (let i = 0; i < data.length; i++) {
    const p = data[i];
    const user = p.user;

    if (!users[user.id]) {
      users[user.id] = {
        full_name: user.first_name + " " + user.last_name,
        purchases: [p],
      };
    } else {
      users[user.id].purchases.push(p);
    }
  }

  // console.log({ users });

  const usersSorted = Object.entries(users).sort((a, b) => {
    console.log({ a }, { b });
    return (
      b[1].purchases.reduce((acc, p) => acc + p.totalAmount, 0) -
      a[1].purchases.reduce((acc, p) => acc + p.totalAmount, 0)
    );
  });
  console.log({ usersSorted });
  //User.purchases = [{timestamp: "", amountSpent: ""}]
  //returning array of users sorted by max amount spent in the last 30 days.
};

console.log(returnUsersByAmountSpent(userPurchaseData));
