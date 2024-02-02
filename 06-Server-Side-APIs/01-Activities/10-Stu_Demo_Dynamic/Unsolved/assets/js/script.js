var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      // login -> for user
      //html_url -> link to git hub profile 
      for (var i =0; i < data.length; i++){
        // console.log(data[i]);
        //createElement ->textContent->appendChild

        var userName = document.createElement("p")
        var userUrl = document.createElement("p")
        var userImage = document.createElement("img")

        userName.textContent = data[i].login;
        userUrl.textContent = data[i].html_url
        userImage.src = data[i].avatar_url;
        userImage.className ="avatar-img";

        userContainer.append(userName)
        userContainer.append(userUrl)
        userContainer.append(userImage)

        var followersUrl = data[i].followers_url;
        fetch(followersUrl)
          .then(function(response){
            return response.json();
          }) 
          .then (function (followerData){
            //Needs review 
          })
      }
    });
}
fetchButton.addEventListener('click', getApi);
