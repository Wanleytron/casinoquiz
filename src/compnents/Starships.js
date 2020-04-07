import React, { Component } from 'react';
import ShipDetails from './ShipDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

class Starships extends Component {

    
      
// function findShipWithMostFilms(results) {
//       let max = 0;
//       let returnedShip = null;
//     for(let i = 0; i < results.length; i++) {
//       if(results[i].films_count > max) {
//         max = results[i].films_count;
//         returnedShip = results[i];
//       }
//     }
//     return returnedShip;
//       }
    
// var ship = findShipWithMostFilms(map)
// var most = map.indexOf(ship)
// if(i==most){ship.classList.add('most');}
state={
      maxNumberOfFilms:0,
}

      render() {

            const {starships} = this.props;

            console.log(starships)

           

         
            const highestNumber = (results) => {
                  let maxValue = 0;
                  let returnedShip = null;
                  for(let i = 0; i < starships.length; i++) {
                  if(starships[i].films.length > maxValue) {
                  maxValue = starships[i].films.length;
                  returnedShip = starships[i];
        
      
            }
        }    
        return returnedShip
      } 
      const ship = highestNumber(starships);
      const mostNumber = starships.indexOf(ship)

    

      console.log(mostNumber)

    
            
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
            // Math.max.apply(Math, array.map(function(o) { return o.y; }))

            return (
                  <>
                 
                        <div className='Starships'>
                          

                             {
                             starships.map((starship, i) => {
                                   
                                   console.log(starship)

                              
                                    return( 
                                   <ShipDetails  key={i} starship={starship} highestNumber={this.highestNumber}/>
                                        )
                                    })
                              }
                        </div>
                  </>
            );
                  
      }     
}

export default Starships;



// {
//       this.state.ideas.map(({title, premises, conclusion}, i) => (
//         <div key={i} className="card">
//           <div className="card-body">
//             <h1>{title}</h1>
//             {premises.map((premise, j) => <p key={j}>{premise}</p>)}
//             <p>{conclusion}</p>
//           </div>
//         </div>
//       ))
//     }


    //     if(starship['crew']>= 10 ){
                              //           const max=0;
                              //       const filmsCount = starship.films.length;
                              //       console.log(filmsCount)
                              //       return(

                                         
                              //             <ShipDetails key={starship.url} starship={starship} />
                              //             )
                              //       }