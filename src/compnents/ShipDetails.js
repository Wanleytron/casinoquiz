import React from 'react'

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

            const film_counts = films.length
            console.log(film_counts)
        
      return (
            
            <div className='starshipDetails'>
                  
                 <h2>{name}</h2> 
                  <h3>{model}</h3>
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
