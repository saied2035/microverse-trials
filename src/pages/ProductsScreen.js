import React from 'react'

export default function ProductsScreen({users}) {
    const allUsers= users.map( (user,i) => {
         return (
               <div className="tc mt3">
                   <div className="dib ba mt3 pa2">
                    <p>{'Product'+(i+1)}</p>
                    <p>{user}</p>
                   </div>
               </div>
            ) 
     })
     return (
            <div className="flex flex-column">{allUsers}</div>
        )
    
}
