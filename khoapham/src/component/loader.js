import React, {Component} from 'react';
import './Progessbar.css';
class Loader extends Component{
  render(){
        return(
          <div id="loader">
                    <div id="progessBar">

                    </div>
          </div>
        );
  }
  componentDidMount()
  {
      LoadProgess();
      function LoadProgess()
      {
      var progessBar  = document.getElementById('progessBar');
      var width = 1;
      var id    = setInterval(loader, 20);
            function loader()
            {
                    if  (width >= 100)
                    {
                        clearInterval(id);
                    }
                    else
                    {
                        width++;
                        progessBar.style.width = width + '%';
                    }
                    if(width == 100){
                       width = 1 ;
                      progessBar.style.width = width;
                    }
            }
      }

  }
}

export default Loader;
