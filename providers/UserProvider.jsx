'use client'

import { MyUserContextProvider } from '@/hooks/UseUser'

const UserProvider = ({children}) => {
  return (
    <MyUserContextProvider>
        {children}
    </MyUserContextProvider>
  )
}

export default UserProvider;
