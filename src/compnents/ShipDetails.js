import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

 const ShipDetails = ({starship:{
      MGLT, cargo_capacity,consumables,cost_in_credits,created,crew,edited,films,hyperdrive_rating
      ,length
      ,manufacturer
      ,max_atmosphering_speed
      ,model
      ,name
      ,passengers
      ,pilots
      ,starship_class
      ,url,films_count
      }}) => {

            // const film_counts = films.length
            // console.log(film_counts)

          

            
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
    
       

           
          
      return (
            
            <div className='starshipDetails'>
                  <div style={{display: 'flex', justifyContent:'space-between'}}>
                        <div>
                        <h3>{name}</h3> 
                        <h4>{model}</h4>
                        </div>

                        {
                        
                           
                        }
                  </div>
                 
                  <div className='sep'></div>
                  <div className='starshipInDetails'>
                        <div>
                              <h4>{crew}</h4>
                              <p>Crew</p>
                        </div>
                        <div>
                              <h4>{passengers}</h4>
                              <p>Passengers</p>
                        </div>
                        <div>
                              
                              
                              <h4>{films.length}</h4>
                              <p>Films</p>
                        </div>
                  </div>
            </div>
      )
}

export default ShipDetails;
