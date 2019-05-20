const eventBrite = () => {
    fetch('https://www.eventbrite.com/oauth/authorize?response_type=KXBIEIL3SS3GWKDXSU7F&client_id=XMP73B2OF2SBKFJZNX&redirect_uri=https://amberlovescats14.github.io/web-workbook/01week/helloworld/')
        .then((res) => res.json())
        .then((data) => {
          // document.getElementsByClassName('get').innerHTML = data;
          console.log(data)
        
        })
  }
 
  
  // This is the link for the documentation
  //https://www.eventbrite.com/platform/api#/introduction/quick-start
  
  // I put a screen shot of my keys in the repository as an image