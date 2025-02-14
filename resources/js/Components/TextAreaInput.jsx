import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextAreaInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <textarea
            {...props}
            type={type}
            className={
                'rounded-md bg-gray-100 placeholder-slate-400 shadow-sm focus:border-gray-400 focus:ring-gray-400 ' +
                className
            }
            ref={localRef}
        />
    );
});
