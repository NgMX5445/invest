


function element(x){
    let result=document.getElementById(x);
    return result;
}


let x=element(email)
console.log("email return "+x);

document.getElementById("submit").onclick=function(){
    
}

function ownPost(Id) {
    return fetch(`/user`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': url,
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