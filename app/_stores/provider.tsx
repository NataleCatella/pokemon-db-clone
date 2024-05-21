'use client'
import { useRef } from 'react'
import {Provider} from "react-redux";
import {makeStore, AppStore} from "@/app/_stores/store";

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider = ({children}: StoreProviderProps) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }
  
  return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider;
