$(function(){
  let $cookie = null
  let $count = null
  
  $('[data-cookie]').click(function(){
     if ($cookie >= null) {
       $count++
       $('.count').html($count)
       
     }
  setTimeout(tenTimes)
    
  })
  function tenTimes() {
    if ($count === 10) {
      alert("Ten cookies too many!")
      $count = null
      $('.count').html(0)
    }
  }
})