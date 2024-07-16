export type InputProps = {
    label?: string;
    multiline?: boolean;
  } & (
    React.InputHTMLAttributes<HTMLInputElement> |
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
  )
  
  const Input = (props: InputProps) => {
    if (props.multiline) {
      return <textarea {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} />
    }
    return <input {...props as React.InputHTMLAttributes<HTMLInputElement>} />
  }
  
  export default Input