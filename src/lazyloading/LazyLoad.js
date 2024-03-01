import React, { useState } from 'react'
import {lazy,Suspense} from 'react'

const LazyComponent = lazy(()=>import('./LazyComponent'))

const LazyLoad = () => {
    const [showComponent, setShowComponent] = useState(false);

    const handleClick = ()=>{
        setShowComponent(true);
    }
  return (
    <div>
        <button onClick={handleClick}>Load component</button>

        <Suspense fallback={<div>loading...</div>}>
            {showComponent&&<LazyComponent/>}
        </Suspense>
    </div>
  )
}

export default LazyLoad