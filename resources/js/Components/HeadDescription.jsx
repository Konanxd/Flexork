const HeadDescription = ({ children, className = '' }) => {
    return (
        <div>
            <p className={'text-justify text-sm ' + className}>{children}</p>
        </div>
    );
};

export default HeadDescription;
