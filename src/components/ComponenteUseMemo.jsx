import React, { useMemo } from 'react'




export const ComponenteUseMemo = ({list}) => {
    
    list = [3,9,1,8,2]

    const sortedList = useMemo(() => {
         const sorted = [...list];
         sorted.sort();
         return sorted;
         }, [list]);
  
  
         return (
            <div>
             {sortedList.map(item => (
             <div key={item}>{item}</div>
             ))}
             <hr></hr>
             </div>
             
             
             );
                


}
