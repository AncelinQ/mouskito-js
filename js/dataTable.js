/*$.get("js/data.json").then(function (response) {
  $('tbody').html('');
  $.each(response, function(index, data){
    $('tbody').append('<tr><td>'+(index+1)+'</td><td>'+data.lastName+'</td><td>'+data.firstName+'</td><td>'+data.age+'</td></tr>').css('text-transform', 'capitalize');
    
  })
});
*/

/*
$.get("js/data.json").then(function (response) {
  let content = '';
  response.map(function(data, index){
    content +=`
    <tr>
      <td>${index+1}</td>
      <td>${data.lastName}</td>
      <td>${data.firstName}</td>
      <td>${data.age}</td>
      </tr>`;
    
  })

  $('tbody').html(content);
  $('td').css('text-transform', 'capitalize');
});
*/

$.get("js/data.json").then(function (response) {
  let content = '';
  $.each(response, function(index, data){
    content +=`
    <tr>
      <td>${index+1}</td>
      <td>${data.lastName}</td>
      <td>${data.firstName}</td>
      <td>${data.age}</td>
      </tr>`;
    
  })

  $('tbody').html(content);
  $('td').css('text-transform', 'capitalize');
});