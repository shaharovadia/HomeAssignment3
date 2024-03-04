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

function createNavBar() {
  const currentVisitor = JSON.parse(localStorage.getItem("currentVisitor"));
  const navbar = document.createElement("nav");
  navbar.id = "Navbar";

  // Add links to the navbar

  navbar.innerHTML = `
 <div class ="allinfo"> 
 <div class ="links">
    <a href="zoo.html">Zoo</a>
    <a href="animal.html" id="midlink">Animal</a>
    <a href="dashboard.html">Dashboard</a>
    </div>
    <span>${currentVisitor.name} - ${currentVisitor.coins} coins</span>
    <img src="path/to/visitor/image.jpg" class="visitor-image" alt="Visitor">
    <button id="resetGame">Reset Game</button>
    <select id="visitorDropdown"></select>
    </div>
  `;
  document.body.prepend(navbar);

  // Populate visitor dropdown and add event listener for change
  const visitorDropdown = document.getElementById("visitorDropdown");
  // Assuming visitors array is available globally or fetched from localStorage
  visitors.forEach((visitor) => {
    let option = new Option(visitor.name, visitor.name);
    visitorDropdown.add(option);
  });

  visitorDropdown.addEventListener("change", (e) => {
    // Logic to update current visitor
    const selectedVisitor = visitors.find((v) => v.name === e.target.value);
    localStorage.setItem("currentVisitor", JSON.stringify(selectedVisitor));
    window.location.reload(); // Refresh to update displayed data
  });

  // Reset game button functionality
  document.getElementById("resetGame").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "login.html"; // Redirect to login page
  });
}
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "main.css";
document.head.appendChild(link);
