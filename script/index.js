const imageContainer = document.getElementById("image-container");

axios
  .get("../data/images.json")
  .then((response) => {
    const images = response.data.images;

    images.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image.url;
      imgElement.alt = `Image ${image.id}`;
      imgElement.classList.add("image-item");
      imageContainer.appendChild(imgElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching images:", error);
  });

  const VisitorAPI=function(t,e,a){var s=new XMLHttpRequest;s.onreadystatechange=function(){var t;s.readyState===XMLHttpRequest.DONE&&(200===(t=JSON.parse(s.responseText)).status?e(t.data):a(t.status,t.result))},s.open("GET","https://api.visitorapi.com/api/?pid="+t),s.send(null)};

  VisitorAPI(
    "TfjTP0pmySVZ9W4TVzIf",
    function(data){console.log(data)},
    function(errorCode, errorMessage){console.log(errorCode, errorMessage)}
);