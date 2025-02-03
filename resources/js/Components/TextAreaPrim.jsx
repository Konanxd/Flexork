export default (function TextAreaPrim({ className = '', ...props }) {
    return (
        <textarea
            rows={5}
            {...props}
            className={
                'w-full border-2 border-zinc-300 placeholder:text-zinc-400' +
                className
            }
        ></textarea>
    );
});

// export default TextAreaPrim;
