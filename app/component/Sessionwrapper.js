'use client'
import {SessionProvider} from 'next-auth/react'


function Sessionwrapper({children}) {
  return (
    <div>
        <SessionProvider>
            {children}
        </SessionProvider>
        </div>
  )
}

export default Sessionwrapper