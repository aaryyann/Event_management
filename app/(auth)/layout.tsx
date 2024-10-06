const Layout = ({children} : { children :React.ReactNode}) => {
    return (
        <div className="flex-center min-h-screen w-full bg-gray-600 bg-dotted-pattern bg-cover bg-fix bg-center">{children}</div>
    )
}

export default Layout;