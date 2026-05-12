const CommonInput = ({
  label,
  labelAction,
  error,
  helperText,
  id,
  name,
  type = "text",
  placeholder,
  className = "",
  labelClassName = "",
  errorClassName = "",
  containerClassName = "",
  required = false,
  disabled = false,
  ...props
}) => {
  const inputId = id || name;
  const messageId = inputId ? `${inputId}-message` : undefined;

  return (
    <div className={containerClassName}>
      {(label || labelAction) && (
        <div className="flex items-center justify-between mb-2">
          {label && (
            <label
              htmlFor={inputId}
              className={`block text-sm font-medium text-gray-700 ${labelClassName}`}
            >
              {label}
              {required && <span className="text-red-500"> *</span>}
            </label>
          )}
          {labelAction}
        </div>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        // required={required}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error || helperText ? messageId : undefined}
        className={`w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:border-transparent transition disabled:bg-gray-100 disabled:cursor-not-allowed ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        } ${className}`}
        {...props}
      />

      {(error || helperText) && (
        <p
          id={messageId}
          className={`mt-1 text-sm ${
            error ? "text-red-600" : "text-gray-500"
          } ${errorClassName}`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default CommonInput;
