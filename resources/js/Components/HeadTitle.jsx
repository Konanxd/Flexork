const HeadTitle = ({ className = '', title }) => {
    return (
        <div className={'poppins-semibold uppercase ' + className}>{title}</div>
    );
};

export default HeadTitle;
