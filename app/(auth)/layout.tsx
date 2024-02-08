const Layout = ( { children } : { children : React.ReactNode }) => {
    return ( 
        <div className="bg-red-500 h-full flex items-center justify-center">
            {children}
        </div>
     );
}
 
export default Layout;