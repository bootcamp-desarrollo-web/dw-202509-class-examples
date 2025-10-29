import { createContext } from 'react'

// Podemos crear el contexto con un valor por defecto, tal y como lo hacemos aquí,
// o sin asignarle ninguno.
export const UserContext = createContext({
    id: null,
    name: '',
    email: ''
})