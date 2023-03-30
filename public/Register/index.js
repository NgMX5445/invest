

window.addEventListener('DOMContentLoaded', function () {


  function element(x){
    let result=document.getElementById(x).value;
    return result;
}



document.getElementById("submit").onclick=function(){

  console.log("email return "+ element("email"));
  postUser();
}

function postUser() {
    return fetch(`/user`, {
      method: 'POST',
      body:JSON.stringify({
        "username":element("user"),
        "email": element("email"),
        "name": element("Name"),
        "password": element("password"),
        "type": 0,
        "contact": element("contact")
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })

      .then(function (response) {
        if (response.status == 200) {
          return response.json()
        } if (response.status == 400) {
          throw new Error('err..')
        } else {
          throw new Error('Unknown error')
        }
      })
   

  }
})