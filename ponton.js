document.addEventListener("DOMContentLoaded", function () {
  fetch("ponton.xml")
      .then(response => {
          if (!response.ok) throw new Error("XML не найден");
          return response.text();
      })
      .then(xmlText => new DOMParser().parseFromString(xmlText, "text/xml"))
      .then(ponton => {
          const grid = document.getElementById("grid");
          const items = ponton.getElementsByTagName("item");

          for (let item of items) {
              const id = item.getAttribute("id");
              const image = item.getElementsByTagName("image")[0].textContent;
              const title = item.getElementsByTagName("title")[0].textContent;
              const description = item.getElementsByTagName("description")[0].textContent;

              const figure = document.createElement("figure");
              figure.id = id;
              figure.innerHTML =
                  `<img src="${image}" alt="${title}">
                      <figcaption>${title}</figcaption>
                      <p class="characteristics">${description}</p>
                  </img>`;
              grid.appendChild(figure);
          }
      })
      .catch(error => {
          console.error("Ошибка загрузки XML:", error);
          document.getElementById("grid").innerHTML = "<p>Не удалось загрузить данные.</p>";
      });
}
);
