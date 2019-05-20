const headers = {
    'Authorization': `Bearer SESXYS4X3FJ5LHZRWGKQ`,
    // 'Accept': 'application/json'
}

// const eventBrite = () => {
    // fetch('https://www.eventbrite.com/oauth/authorize?response_type=KXBIEIL3SS3GWKDXSU7F&client_id=XMP73B2OF2SBKFJZNX&redirect_uri=https://amberlovescats14.github.io/web-workbook/01week/helloworld/', {headers, mode:'no-cors' })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       // document.getElementsByClassName('get').innerHTML = data;
    //       console.log(data)
        
    //     })
 
    
    // const fetch = require("node-fetch");
    
        const token = `&token=KXBIEIL3SS3GWKDXSU7F`;
        // const activity = req.query.activity;
        const eventbrite = `https://www.eventbriteapi.com/v3/events/search/?expand=venue,logo&sort_by=best&location.address=1100+Congress+Ave%2C+Austin%2C+TX+78701&location.within=20mi&categories=` + token;
    
        // console.log(eventbrite)
        fetch(eventbrite)
          .then(response => response.json())
          .then(data => {
            console.log(data)
          });
  

  
  // This is the link for the documentation
  //https://www.eventbrite.com/platform/api#/introduction/quick-start
  
  // I put a screen shot of my keys in the repository as an image