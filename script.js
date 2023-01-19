let btns = document.querySelectorAll("button");
let articles = document.querySelectorAll("article");
let mainPage = document.getElementById("mainPage");
let projectPage = document.getElementById("projectPage");
let aboutPage = document.getElementById("aboutPage");
let moreLessClients = document.getElementById("moreLessClients");
moreLessClients.addEventListener("click", showHideContent);
let showHideClients = false;
let revPosition = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let styles = e.currentTarget.classList;
    // HIDE & SHOW PAGES
    if (styles.contains("mainPage")) {
      // show
      mainPage.classList.add("enabled");
      mainPage.classList.remove("disabled");
      // hide
      projectPage.classList.remove("enabled");
      aboutPage.classList.remove("enabled");
      projectPage.classList.add("disabled");
      aboutPage.classList.add("disabled");
    }
    if (styles.contains("projectPage")) {
      // show
      projectPage.classList.add("enabled");
      projectPage.classList.remove("disabled");
      // hide
      mainPage.classList.remove("enabled");
      mainPage.classList.add("disabled");
      aboutPage.classList.remove("enabled");
      aboutPage.classList.add("disabled");
      //
      for (let i = 0; i < btns.length; i++)
        btns[i].classList.remove("underlined");
      btn.classList.add("underlined");
    }
    if (styles.contains("aboutPage")) {
      // show
      aboutPage.classList.add("enabled");
      aboutPage.classList.remove("disabled");
      // hide
      mainPage.classList.remove("enabled");
      mainPage.classList.add("disabled");
      projectPage.classList.remove("enabled");
      projectPage.classList.add("disabled");
      //
      for (let i = 0; i < btns.length; i++)
        btns[i].classList.remove("underlined");
      btn.classList.add("underlined");
    }

    // CHANGE REVIEW

    if (styles.contains("goNext")) {
      articles.forEach((art) => {
        if (art.classList.contains("enabled"))
          revPosition = Number(art.id.slice(-1));
      });
      if (revPosition === articles.length) revPosition = 1;
      else revPosition = revPosition + 1;

      articles.forEach((art) => {
        if (art.id.slice(-1) == revPosition) {
          art.classList.add("enabled");
          art.classList.remove("disabled");
        } else {
          art.classList.add("disabled");
          art.classList.remove("enabled");
        }
      });
    }

    if (styles.contains("goPrev")) {
      articles.forEach((art) => {
        if (art.classList.contains("enabled"))
          revPosition = Number(art.id.slice(-1));
      });
      if (revPosition === 1) revPosition = articles.length;
      else revPosition = revPosition - 1;

      articles.forEach((art) => {
        if (art.id.slice(-1) == revPosition) {
          art.classList.add("enabled");
          art.classList.remove("disabled");
        } else {
          art.classList.add("disabled");
          art.classList.remove("enabled");
        }
      });
    }
  });
});

// HIDE & SHOW CLIENTS EXTENDED LIST

function showHideContent(e) {
  e.preventDefault();

  if (!showHideClients) {
    moreLessClients.insertAdjacentHTML(
      "beforebegin",
      `<li class="remove">Harvard</li>`
    );
    moreLessClients.insertAdjacentHTML(
      "beforebegin",
      `<li class="remove">Typeform</li>`
    );
    moreLessClients.insertAdjacentHTML(
      "beforebegin",
      `<li class="remove">Workato</li>`
    );
    moreLessClients.insertAdjacentHTML(
      "beforebegin",
      `<li class="remove">Running Remote</li>`
    );
    moreLessClients.innerHTML = `<button class="roundBtn centered">↑</button>`;
    showHideClients = true;
  } else {
    let Lis = document.querySelectorAll("li");
    Lis.forEach((el) => {
      if (el.classList.contains("remove")) el.remove();
    });
    moreLessClients.innerHTML = `<li>& More </li>`;
    showHideClients = false;
  }

  // REVIEWS BACK/FORTH
}