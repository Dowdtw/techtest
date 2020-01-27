const xhr = new XMLHttpRequest();
const url = 'http://httpbin.org/get';

xhr.responseType = 'json';

xhr.onreadystatechange = () =>{
  if (xhr.readyState === XMLHttpRequest.DONE) {
  return xhr.response;
  }
};

xhr.open('GET', url);
xhr.send();
