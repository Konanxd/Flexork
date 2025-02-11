const FormEditTitle = ({ title, ...props }) => {
    return (
        <div className="px-2 text-lg font-semibold uppercase" {...props}>
            {title}
        </div>
    );
};

export default FormEditTitle;
