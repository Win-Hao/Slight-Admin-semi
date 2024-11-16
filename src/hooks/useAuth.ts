export const useAuth=()=>{
    const setIsAuthenticated=()=>{
        localStorage.setItem('isAuthenticated', 'true')};
    const signOut = () => {
        localStorage.removeItem('isAuthenticated')};
    const isLogged = () => localStorage.getItem('isAuthenticated') === 'true';
    return {setIsAuthenticated, signOut, isLogged};
}
export type AuthContext = ReturnType<typeof useAuth>;