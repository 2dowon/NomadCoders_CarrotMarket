interface TextAreaProps {
  label?: string;
  name?: string;
  [key: string]: any;
}

export default function TextArea({ label, name, ...rest }: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-orange-500 focus:ring-orange-500 "
        rows={4}
        {...rest}
      />
    </div>
  );
}
