import React, { createContext } from 'react'

export const AppContext = createContext({});

export default function AppContextComponent({ children }: { children: React.ReactNode }) {
    return (
        <div>{children}</div>
    )
}
