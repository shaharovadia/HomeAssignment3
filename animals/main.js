// מערכים גלובלים שישמשו אותנו בכל העמודים
let visitors = [
  {
    name: "John Smith",
    coins: 50,
    thumbImage: "https://www.miicharacters.com/miis/thumb/968_barts.jpg",
  },
  {
    name: "Emily Johnson",
    coins: 50,
    thumbImage:
      "https://www.miicharacters.com/miis/thumb/18265_paulapolestar.jpg",
  },
  {
    name: "Michael Williams",
    coins: 50,
    thumbImage: "https://www.miicharacters.com/miis/thumb/968_barts.jpg",
  },
  {
    name: "Jessica Brown",
    coins: 50,
    thumbImage:
      "https://www.miicharacters.com/miis/thumb/18265_paulapolestar.jpg",
  },
  {
    name: "Christopher Jones",
    coins: 50,
    thumbImage: "https://www.miicharacters.com/miis/thumb/968_barts.jpg",
  },
  {
    name: "Ashley Davis",
    coins: 50,
    thumbImage:
      "https://www.miicharacters.com/miis/thumb/18265_paulapolestar.jpg",
  },
  {
    name: "Matthew Miller",
    coins: 50,
    thumbImage: "https://www.miicharacters.com/miis/thumb/968_barts.jpg",
  },
  {
    name: "Amanda Wilson",
    coins: 50,
    thumbImage:
      "https://www.miicharacters.com/miis/thumb/18265_paulapolestar.jpg",
  },
  {
    name: "David Moore",
    coins: 50,
    thumbImage: "https://www.miicharacters.com/miis/thumb/968_barts.jpg",
  },
  {
    name: "Sarah Taylor",
    coins: 50,
    thumbImage:
      "https://www.miicharacters.com/miis/thumb/18265_paulapolestar.jpg",
  },
  {
    name: "James Anderson",
    coins: 50,
    thumbImage: "https://www.miicharacters.com/miis/thumb/968_barts.jpg",
  },
  {
    name: "Jennifer Thomas",
    coins: 50,
    thumbImage:
      "https://www.miicharacters.com/miis/thumb/18265_paulapolestar.jpg",
  },
  {
    name: "Robert Jackson",
    coins: 50,
    thumbImage: "https://www.miicharacters.com/miis/thumb/968_barts.jpg",
  },
  {
    name: "Elizabeth White",
    coins: 50,
    thumbImage:
      "https://www.miicharacters.com/miis/thumb/18265_paulapolestar.jpg",
  },
  {
    name: "Daniel Harris",
    coins: 50,
    thumbImage: "https://www.miicharacters.com/miis/thumb/968_barts.jpg",
  },
  {
    name: "Melissa Martin",
    coins: 50,
    thumbImage:
      "https://www.miicharacters.com/miis/thumb/18265_paulapolestar.jpg",
  },
  {
    name: "William Thompson",
    coins: 50,
    thumbImage: "https://www.miicharacters.com/miis/thumb/968_barts.jpg",
  },
  {
    name: "Linda Garcia",
    coins: 50,
    thumbImage:
      "https://www.miicharacters.com/miis/thumb/18265_paulapolestar.jpg",
  },
  {
    name: "Joseph Martinez",
    coins: 50,
    thumbImage: "https://www.miicharacters.com/miis/thumb/968_barts.jpg",
  },
  {
    name: "Karen Robinson",
    coins: 50,
    thumbImage:
      "https://www.miicharacters.com/miis/thumb/18265_paulapolestar.jpg",
  },
];

let animals = [
  {
    name: "Lion",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Elephant",
    isPredator: false,
    weight: 1200,
    height: 200,
    color: "grey",
    habitat: "land",
  },
  {
    name: "Giraffe",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "yellow",
    habitat: "land",
  },
  {
    name: "Tiger",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "orange",
    habitat: "land",
  },
  {
    name: "Monkey",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Kangaroo",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Penguin",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "black",
    habitat: "sea",
  },
  {
    name: "Zebra",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "black&white",
    habitat: "land",
  },
  {
    name: "Cheetah",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "yellow",
    habitat: "land",
  },
];

// פונקציה זו טוענת עבורכם את המידע ההתחלתי של האפליקציה, במידה וקיים מידע בלוקל סטורג׳, היא תקח אותו משם
// אל תשנו את הקוד בפונקציה הזו כדי לשמור על תקינות הטמפלייט
function generateDataset() {
  if (localStorage.getItem("visitors")) {
    visitors = JSON.parse(localStorage.getItem("visitors"));
  } else {
    localStorage.setItem("visitors", JSON.stringify(visitors));
  }
  if (localStorage.getItem("animals")) {
    animals = JSON.parse(localStorage.getItem("animals"));
  } else {
    localStorage.setItem("animals", JSON.stringify(animals));
  }

  console.log(visitors);
}
generateDataset();

function logout() {
  //ממשו את הלוגיקה שמתנתקת מאורח מחובר
  // שימו לב לנקות את השדה המתאים בלוקל סטורג'
}
