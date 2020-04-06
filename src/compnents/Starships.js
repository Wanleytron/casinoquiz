import React, { Component } from 'react';
import ShipDetails from './ShipDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

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
            // Math.max.apply(Math, array.map(function(o) { return o.y; }))

           
           
            // console.log(starShopList)

          
                  let max = 0;
                  let returnedShip = null;
                  for(let i = 0; i < starships.length; i++) {
                  if(starships[i].films.length > max) {
                  max = starships[i].films.length;
                  returnedShip = starships[i];

                  

            }
        }     
      console.log(returnedShip)



            return (
                  <>
                 
                        <div className='Starships'>
                             


                             {starships.map(starship => 
                                    
                                    
                                          starship['crew'] >= 10 ? (

                                    <div className='starshipDetails'>
                                   <div style={{display: 'flex', justifyContent:'space-between'}}>
                                         <div>
                                         <h3>{starship.name}</h3> 
                                         <h4>{starship.model}</h4>
                                         </div>
                 
                                         { 
                                                starship['films'].length > 1 ? <FontAwesomeIcon icon={faStar} />: null
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

                                    )  : null   
                              
                              
                               
                             )}
                            

                              {/* {starships.map(starship => {

                                    
                                    return(
                                    starship['crew'] >= 10 ? (<ShipDetails key={starship.url} starship={starship} />): null
                                    )

                                   { Math.max.apply(Math, starships.map(starship => {
                                          return(
                                          <ShipDetails key={starship.url} starship={starship} />
                                          )
                                    }))
                              }
                          
                              })} */}
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