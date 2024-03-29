window.onload = function() {
  generateDataset();
};

function loginAsVisitor(visitorName) {
  const selectedVisitor = visitors.find((v) => v.name === visitorName);

  if (selectedVisitor) {
    localStorage.setItem("currentVisitor", JSON.stringify(selectedVisitor));
  

    const dialog = document.createElement('dialog');
    dialog.textContent = `Welcome to the zoo ${visitorName}!`;
    document.body.appendChild(dialog);
    dialog.showModal();

    setTimeout(() => {
      dialog.close();
      window.location.href = "zoo.html"; 
    }, 3000);
  }
}

let visitorsForView = [...visitors];
const dialog = document.querySelector("#visitor-dialog");

const getVisitorHTMLCard = (visitor) => {
  const template = `
      <div class="card" style="min-height: 260px;" >
        <img class="card-img-top" src="${visitor.thumbImage}" alt="${visitor.name}"/>
        <div class="card-body">
          <p class="card-text">${visitor.name}</p>
          <p class="card-text">${visitor.coins}</p>
          <button class="select-button">Select</button>
        </div>
      </div>`;

     

  const wrapper = document.createElement("div");
  wrapper.className = "visitor-card";
  wrapper.innerHTML = template;

  const button = wrapper.querySelector('.select-button');
  button.addEventListener('click', () => loginAsVisitor(visitor.name));

  return wrapper;
};


const getSearchBox = () => {
  const queryInput = document.createElement("input");
  queryInput.id = "query-input";
  queryInput.placeholder = "Search visitor";
  queryInput.className = "form-control my-4";
  queryInput.oninput = (e) => {
    const searchValue = e.target.value.toLowerCase();
  visitorsForView = visitors.filter((visitor) =>
    visitor.name.toLowerCase().includes(searchValue)
  );
  renderVisitors();
  };
  return queryInput;
};

const getEmptyCardsHTMLTemplate = () => {
  const templateWrapper = document.createElement("div");
  templateWrapper.className = "empty-result";

  const template = `
    <h2>No Visitors Found</h2>
    <button id="clear-filter-btn" class="btn btn-dark">Clear search text</button>
    `;
  templateWrapper.innerHTML = template;
  templateWrapper.children["clear-filter-btn"].addEventListener(
    "click",
    clearSearchBox
  );
  return templateWrapper;
};

const clearSearchBox = () => {
  const input = document.getElementById("query-input");
  input.value = "";
  visitorsForView = [...visitors];
  renderVisitors();
};

const renderVisitors = () => {
  const visitorCards = visitorsForView.map(getVisitorHTMLCard);
  const visitorPlaceholder = document.getElementById("placeholder");
  visitorPlaceholder.innerHTML = "";

  if (!visitorCards.length) {
    visitorPlaceholder.appendChild(getEmptyCardsHTMLTemplate());
  }
  visitorPlaceholder.append(...visitorCards);
};

document.body.insertAdjacentElement("afterbegin", getSearchBox());
window.addEventListener("load", renderVisitors);
