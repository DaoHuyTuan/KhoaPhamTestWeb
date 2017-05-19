
function an(){
  document.getElementById('address').style.display = 'none';
  document.getElementById('menu').style.position = 'fixed';
  document.getElementById('menu').style.top = '0px';
  if(document.body.scrollTop == 0){
        document.getElementById('menu').style.top = '50px';
        document.getElementById('address').style.display = 'block';

  }
}
