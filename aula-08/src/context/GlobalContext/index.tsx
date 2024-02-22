import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useState } from "react";
import { User } from "../../types";

interface GlobalContextProps {
    user: User | null
    setUser?: Dispatch<SetStateAction<User | null>>
}

const initialValues: GlobalContextProps = {
    user: null,
}

const GlobalContext = createContext<GlobalContextProps>(initialValues)

const GlobalContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [user, setUser] = useState<User | null>(initialValues.user)

    return (
        <GlobalContext.Provider value={{...initialValues, user, setUser}}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalContextProvider }