import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

 class ShipDetails extends React.Component  {


       
render(){
           
      const {starship, highestNumber} = this.props

     
      


      return (
            
            <div className='starshipDetails'>
                  <div style={{display: 'flex', justifyContent:'space-between'}}>
                        <div>
                        <h3>{starship.name}</h3> 
                        <h4>{starship.model}</h4>
                        </div>

                        {
                              starship.films.length > 1 ? <FontAwesomeIcon icon={faStar} /> : null
                             
                           
                        }
                  </div>
                 
                  <div className='sep'></div>
                  <div className='starshipInDetails'>
                        <div>
                              <h4>{starship.crew}</h4>
                              <p>Crew</p>
                        </div>
                        <div>
                              <h4>{starship.passengers}</h4>
                              <p>Passengers</p>
                        </div>
                        <div>
                              
                              
                              <h4>{starship.films.length}</h4>
                              <p>Films</p>
                        </div>
                  </div>
            </div>
      )
}
}
export default ShipDetails;
