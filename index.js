function setMessage(){
  document.getElementById('messageDiv').innerText = document.getElementById('message').value;
}
function setName(){
  document.getElementById('nameDiv').innerText = document.getElementById('name').value;
}
function setCity(){
  document.getElementById('cityDiv').innerText = document.getElementById('city').value;
}
function setProf(){
  document.getElementById('profDiv').innerText = document.getElementById('prof').value;
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
  domtoimage.toJpeg(document.querySelector('article'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'cdma-flyer.jpeg';
        link.href = dataUrl;
        link.click();
    });
}


function makeImage2(){
  const img = document.querySelector('article').innerHTML;
  const json = {
      html: img,
      css: 'a,hr{color:inherit}progress,sub,sup{vertical-align:baseline}.m-0,blockquote,body,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,menu,ol,p,pre,ul{margin:0}.p-0,fieldset,legend,menu,ol,ul{padding:0}.text-black,.text-gray-500,.text-gray-900,.text-white{--tw-text-opacity:1}.arrow,sub,sup{position:relative}.bg-blue-700,.bg-gray-100,.bg-gray-50,.bg-white{--tw-bg-opacity:1}*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }:after,:before{--tw-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{line-height:inherit}hr{height:0;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}menu,ol,ul{list-style:none}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}.cursor-pointer,[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container,.w-full{width:100%}@media (min-width:640px){.container{max-width:640px}.sm\:px-4{padding-left:1rem;padding-right:1rem}}@media (min-width:768px){.container{max-width:768px}.md\:max-w-3xl{max-width:48rem}}@media (min-width:1024px){.container{max-width:1024px}.lg\:max-w-3xl{max-width:48rem}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.mx-auto{margin-left:auto;margin-right:auto}.my-8{margin-top:2rem;margin-bottom:2rem}.my-3{margin-top:.75rem;margin-bottom:.75rem}.mt-4{margin-top:1rem}.ml-1{margin-left:.25rem}.mb-6{margin-bottom:1.5rem}.mb-2{margin-bottom:.5rem}.mt-1{margin-top:.25rem}.mr-2{margin-right:.5rem}.-ml-1{margin-left:-.25rem}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.h-96{height:24rem}.h-16{height:4rem}.h-32{height:8rem}.h-20{height:5rem}.h-5{height:1.25rem}.w-96{width:24rem}.w-16{width:4rem}.w-10{width:2.5rem}.w-20{width:5rem}.w-5{width:1.25rem}.-skew-y-12{--tw-skew-y:-12deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.self-center{align-self:center}.overflow-hidden{overflow:hidden}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.rounded-b-lg{border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.border-2{border-width:2px}.border{border-width:1px}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.bg-gray-100{background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-white{background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-gray-50{background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-blue-700{background-color:rgb(29 78 216 / var(--tw-bg-opacity))}.p-6{padding:1.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-2\.5{padding:.625rem}.p-2{padding:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-2\.5{padding-top:.625rem;padding-bottom:.625rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.pt-4{padding-top:1rem}.pb-8{padding-bottom:2rem}.text-center{text-align:center}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-semibold{font-weight:600}.font-medium{font-weight:500}.uppercase{text-transform:uppercase}.text-black{color:rgb(0 0 0 / var(--tw-text-opacity))}.text-white{color:rgb(255 255 255 / var(--tw-text-opacity))}.text-gray-900{color:rgb(17 24 39 / var(--tw-text-opacity))}.text-gray-500{color:rgb(107 114 128 / var(--tw-text-opacity))}.arrow{display:block;float:left;border-color:purple transparent transparent;border-style:solid;border-width:25px 10px 0;width:0;height:0;margin-top:-10px;margin-left:-.3px;line-height:0}.img-a{margin-top:-30px;margin-left:30px;background-color:#fff}.img-p{margin-top:-40px;margin-left:15px}.a-txt{margin-left:30px;margin-top:5px;color:#fff}.a-txt:first-child{font-family:cursive}.hover\:bg-blue-800:hover{--tw-bg-opacity:1;background-color:rgb(30 64 175 / var(--tw-bg-opacity))}.focus\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.focus\:outline-none:focus{outline:transparent solid 2px;outline-offset:2px}.focus\:ring-4:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(59 130 246 / var(--tw-ring-opacity))}.focus\:ring-blue-300:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(147 197 253 / var(--tw-ring-opacity))}@media (prefers-color-scheme:dark){.dark\:border-gray-600{--tw-border-opacity:1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}.dark\:bg-gray-900{--tw-bg-opacity:1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.dark\:bg-gray-700{--tw-bg-opacity:1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.dark\:bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))}.dark\:text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.dark\:text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219 / var(--tw-text-opacity))}.dark\:text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))}.dark\:placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.dark\:placeholder-gray-400::placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175 / var(--tw-placeholder-opacity))}.dark\:hover\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))}.dark\:focus\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgb(59 130 246 / var(--tw-border-opacity))}.dark\:focus\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(59 130 246 / var(--tw-ring-opacity))}.dark\:focus\:ring-blue-800:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(30 64 175 / var(--tw-ring-opacity))}}'
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