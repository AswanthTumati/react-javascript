import React, { useMemo } from 'react'

const Addition = ({numbers}) => {
    const  sum = useMemo(()=>{
        return numbers.reduce((accumlator,number)=>accumlator+number,0);
    },[numbers]);

  return (
    <div>
        <p>Sum: {sum}</p>
    </div>
  )
}

export default Addition