
 const eventbrite = () => {
    fetch('https://www.eventbrite.com/oauth/authorize?response_type=KXBIEIL3SS3GWKDXSU7F&client_id=XMP73B2OF2SBKFJZNX&redirect_uri=https://amberlovescats14.github.io/web-workbook/01week/helloworld/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
       
      })
  }
  eventbrite()