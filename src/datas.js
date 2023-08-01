let xAxisData = [
  {
    name: "Jan",
    Sale: 112_000,
  },
  {
    name: "Feb",
    Sale: 99_000,
  },
  {
    name: "Mar",
    Sale: 12_090,
  },
  {
    name: "Apr",
    Sale: 99_000,
  },
  {
    name: "May",
    Sale: 54_000,
  },
  {
    name: "Jun",
    Sale: 85_000,
  },
  {
    name: "Jul",
    Sale: 34_000,
  },
  {
    name: "Agu",
    Sale: 18_598,
  },
  {
    name: "Sep",
    Sale: 0,
  },
  {
    name: "Oct",
    Sale: 73_078,
  },
  {
    name: "Nov",
    Sale: 12_900,
  },
  {
    name: "Dev",
    Sale: 97_000,
  },
];

const newMembers = [
  { id: 1, username: "Reza", title: "web developer", img: "images/npm.png" },
  { id: 2, username: "Zahra", title: "React developer", img: "images/npm.png" },
  { id: 3, username: "Mohammad", title: "JS developer", img: "images/npm.png" },
];
const transactions = [
  {
    id: 1,
    customer: "Reza",
    date: "22 May 2022",
    img: "images/npm.png",
    amount: "$199.95",
    status: "Approved",
  },
  {
    id: 2,
    customer: "Zahra",
    date: "15 April 2022",
    img: "images/npm.png",
    amount: "$185.95",
    status: "Declined",
  },
  {
    id: 3,
    customer: "Mohammad",
    date: "19 April 2022",
    img: "images/npm.png",
    amount: "$150.2",
    status: "Pending",
  },
];
let userRows = [
  {
    id: 1,
    username: "Reza",
    avatar: "images/npm.png",
    status: "active",
    transaction: "$129",
    email: "email@gmail.com",
  },
  {
    id: 2,
    username: "Zahra",
    avatar: "images/npm.png",
    status: "active",
    transaction: "$259",
    email: "email@gmail.com",
  },
  {
    id: 3,
    username: "Mohammad",
    avatar: "images/npm.png",
    status: "active",
    transaction: "$87",
    email: "email@gmail.com",
  },
  {
    id: 4,
    username: "Mohammad",
    avatar: "images/npm.png",
    status: "active",
    transaction: "$19.85",
    email: "email@gmail.com",
  },
  {
    id: 5,
    username: "Zarez",
    avatar: "images/npm.png",
    status: "active",
    transaction: "$112.85",
    email: "email@gmail.com",
  },
];

let productRows = [
  {
    id: 1,
    name: "laptop",
    avatar: "images/npm.png",
    status: "active",
    price: "$129",
  },
  {
    id: 2,
    name: "phone",
    avatar: "images/npm.png",
    status: "active",
    price: "$259",
  },
  {
    id: 3,
    name: "tablet",
    avatar: "images/npm.png",
    status: "active",
    price: "$87",
  },
  {
    id: 4,
    name: "book",
    avatar: "images/npm.png",
    status: "active",
    price: "$19.85",
  },
  {
    id: 5,
    name: "pen",
    avatar: "images/npm.png",
    status: "active",
    price: "$112.85",
  },
];

export { xAxisData, newMembers, transactions, productRows, userRows };
