export let map = (function(){
  let init = function(){
    
    let mapCenter = {
      lat: 53.847750, 
      lng: 27.629020,
    };

    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: mapCenter,
      scrollwheel: false,
    });
  };

  return{
    init: init,
  };
})();