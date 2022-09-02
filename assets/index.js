function setMessage(){
  document.getElementById('messageDiv').innerText = document.getElementById('message').value;
}
function setName(){
  document.getElementById('nameDiv').innerText = document.getElementById('name').value;
}
function setCity(){
  document.getElementById('cityDiv').innerText = document.getElementById('city').value;
}

document.getElementById('image').onchange=function(evt){
  var tgt = evt.target || window.event.srcElement,
      files = tgt.files;
  
  // FileReader support
  if (FileReader && files && files.length) {
      var fr = new FileReader();
      fr.onload = function () {
          document.getElementById('imgDiv').src = fr.result;
      }
      fr.readAsDataURL(files[0]);
  }
  
  // Not supported
  else {
      alert('Please Use a modern browser')
  }
}


function makeImage(){
  const img = document.querySelector('article').innerHTML;
  const json = {
      html: '<script src="https://cdn.tailwindcss.com"></script>'+img,
      css: '.arrow,.img-a{margin-top:-10px}.arrow{display:block;float:left;border-color:purple transparent transparent;border-style:solid;border-width:25px 10px 0;width:0;height:0;position:relative;margin-left:-.3px;line-height:0}.img-a{margin-left:30px;background-color:#fff}.img-p{margin-top:0;margin-left:15px}.a-txt{margin-top:-40px;z-index:10;color:#fff}.a-txt:first-child{font-family:cursive}'
    };
    
    const username = "0e18ec4d-d733-4997-b168-bce1a8a9d980";
    const password = "ace78db1-f554-4fb2-854c-7260da52b0d4";
    
    const options = {
      method: 'POST',
      body: JSON.stringify(json),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(username + ":" + password)
      }
    }
    
    fetch('https://hcti.io/v1/image', options)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res.status);
        }
      })
      .then(data => {
          // Image URL is available here
          console.log(data.url)
          var a = document.createElement('a');
          a.href = data.url;
          a.download = 'cdma flyer';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
      })
      .catch(err => console.error(err));
    
}