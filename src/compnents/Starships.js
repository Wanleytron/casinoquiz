import React, { Component } from 'react';
import ShipDetails from './ShipDetails'

class Starships extends Component {

      
      render() {
            
          
            const {starships} = this.props;
         
           
           
            
            // const starshipList = starships.map(starship => {
            //       return(
            //             <ShipDetails key={starship.url} starship={starship}/>
            //       )
            // })


            // const starshipList = starships.sort((a,b) => a.crew > b.crew).map(starship => {
            //       return(
            //             <ShipDetails key={starship.url} starship={starship}/>
            //       )
            // })

           
             

            return (
                  <>
                 
                        <div className='Starships'>

                              {starships.map(starship => {
                                  if(starship['crew']>= 10 ){
                                    return(
                                          <ShipDetails key={starship.url} starship={starship}/>
                                          )
                                    }
                              })}
                        </div>
                  </>
            );
                  
      }     
}

export default Starships;