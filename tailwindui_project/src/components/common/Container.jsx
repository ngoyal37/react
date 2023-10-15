const Container = ({className, children }) => {
    return (<>
        <div className={`mx-auto px-4 w-full max-w-[1240px] ${className}`}>
            {children}
        </div>
    </>);
}
export default Container;