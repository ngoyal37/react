const Container = ({ className, children }) => {
    return (<>
        <div className={`container ${className}`}> {/* container settings in :- tailwind.config.js */}
            {children}
        </div>
    </>);
}
export default Container;