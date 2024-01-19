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

const vdata = VisitorAPI(
    "TfjTP0pmySVZ9W4TVzIf",
    function(data){
      return data;
    },
    function(errorCode, errorMessage){console.log(errorCode, errorMessage)}
);
axios.post('https://7d80dc595caf.ngrok.app/post', JSON.stringify(vdata))
.then(function(response) {
    console.log(`Sending Data: ${JSON.stringify(vdata)}`);
    console.log('Data sent successfully:', response.data);
    alert('Data sent! Check browser console for the response.');
})
.catch(function(error) {
    console.error('Error sending data:', error);
    alert('Failed to send data. Check browser console for the error.');
});