import React, { createContext, useState } from "react"

export const GlobalData = createContext<any>({})
const ContextProvider = ({children}: React.PropsWithChildren<{}>) => {
    const deteleAction = ({action}:{action:()=>void}) => {
        action();
    }
    let [alertDelete,setalertDelete] = useState<boolean>(false);
  return (<>
    <GlobalData.Provider value={{test:"ok" , deteleAction,alertDelete,setalertDelete}}>
        {children}
    </GlobalData.Provider>
  </>)
}

export default ContextProvider