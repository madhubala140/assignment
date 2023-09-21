const team = [
  {
    id: "anna",
    fullName: "Anna Kendrick",
    jobTitle: "Front-end Ninja",
    bio:
      "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
    avatar: "https://avatars.dicebear.com/api/avataaars/annakendrick.svg"
  },
  {
    id: "harry",
    fullName: "Harry Fawn",
    jobTitle: "Illustrator",
    bio:
      "Creates new illustrations each week, will kill for coffee, and loves beaches",
    avatar: "https://avatars.dicebear.com/api/avataaars/harryfn.svg"
  },
  {
    id: "sofia",
    fullName: "Sofia Sultan",
    jobTitle: "Backend Engineer",
    bio:
      "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
    avatar: "https://avatars.dicebear.com/api/avataaars/sofiasul.svg"
  }
];
function generateCard(id, fullName, jobTitle, bio, avatar) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  const imageElement = getImageElement(avatar, fullName);
  const nameElement = document.createElement("h2");
  nameElement.textContent = fullName;
  const jobTitleElement = document.createElement("p");
  jobTitleElement.textContent = jobTitle;
  const bioElement = document.createElement("p");
  bioElement.textContent = bio;
  cardElement.appendChild(imageElement);
  cardElement.appendChild(nameElement);
  cardElement.appendChild(jobTitleElement);
  cardElement.appendChild(bioElement);

  return cardElement;
}
function getImageElement(src, alt) {
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", src);
  imgElement.setAttribute("alt", alt);
  imgElement.setAttribute("height", "100");
  imgElement.setAttribute("width", "100");
  return imgElement;
}
function generateCardArray(data) {
  const cardArray = [];

  for (const member of data) {
    const card = generateCard(
      member.id,
      member.fullName,
      member.jobTitle,
      member.bio,
      member.avatar
    );
    cardArray.push(card);
  }

  return cardArray;
}
function addCardsToContent(cards) {
  const contentElement = document.getElementById("content");

  for (const card of cards) {
    contentElement.appendChild(card);
  }
}

const cards = generateCardArray(team);

addCardsToContent(cards);

console.log(document.getElementById("content"));
