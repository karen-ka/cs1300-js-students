var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
// var apiToken = "?token=eto-vXCwQu7OMYwUI1VVwOCd_z1TXJi7ZIG1cxS7y5E";
var apiToken = "?token=KkDoOS8-aGst16DxpXSYbvdu39BFrvz-ferm-CjPMMc";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });

// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
corsPromise().then(
  (request) =>
    (request.onload = request.onerror = function () {
      // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED
      const plantData = JSON.parse(request.response).data;
      console.log(plantData);
      let ids = plantData.filter((x) => {
        return x['id'] % 2 === 0;
      });
      // console.log(ids);
      addPlants(ids);
    })
);

// STUDENT
function addPlants(data) {
  // let li = [];
  // let s = "";

  // ids.foreach((x) => {
  //   document.getElementById("addafterme").insertAdjacentHTML("afterend", 
  //   `<div class="holder"><img src=${data[i]['image_url']} alt='Plant'></div>`);
  // })

  for(let i = 0; i < data.length; i++){ 
    // li.append(data[i][1]);
    // li.push(data[i]['common_name'])
    // s += data[i]['common_name'] + "\n";
    document.getElementById("content").insertAdjacentHTML("afterend", 
    `<div class="holder"><figure><img src=${data[i]['image_url']} alt='Plant'><figcaption>${data[i]['common_name']}</figcaption></figure></div>`);
  }
  // document.getElementById("para").innerHTML += s;
  console.log('got here')
}



//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////

// function fun() {
//   document.getElementById()
// }