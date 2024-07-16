export type InputProps = {
  label?: string;
  multiline?: boolean;
} & (
  React.InputHTMLAttributes<HTMLInputElement> |
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
)

const InputOrTextArea = (props: InputProps) => {
  if (props.multiline) {
    return <textarea {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} />
  }
  return <input {...props as React.InputHTMLAttributes<HTMLInputElement>} />
}

const Input = ({ label, className, ...rest}: InputProps) => {
  return <div className="relative">
    {label && <label className="absolute">{label}</label>}
    <InputOrTextArea
      className={`
        bg-dark text-gray-primary
        disabled:bg-disabled disabled:border-2 disabled:border-disabled
        ${className}
      `}
      {...rest}
    />
  </div>
}

export default Input