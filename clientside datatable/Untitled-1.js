  $("#click").click(function () {
    const link = document.querySelector("#link").value;
    const name = document.querySelector("#name").value;
    links["fav"].list.push({ url: link, name: name });
    localStorage.setItem("links", JSON.stringify(links));
    console.log(localStorage.setItem("links", JSON.stringify(links)));
  });

  const localStorageLinks = JSON.parse(localStorage.getItem("links"))