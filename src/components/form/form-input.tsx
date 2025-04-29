import clsx from "clsx";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useController } from "react-hook-form";
import { Input } from "../ui/input";

type TInputComponentProps = {
  name: string;
  type: string;
  placeholder?: string;
  required: boolean;
  className?: string;
};

const InputComponent = (props: TInputComponentProps) => {
  const { name, placeholder, type, required, className } = props;

  // useController for no manual registering of custom inputs
  const {
    field: { ...inputProps },
    fieldState: { error },
  } = useController({ name, defaultValue: "" });

  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";

  return (
    <div className="">
      <div className="relative">
        <Input
          {...inputProps}
          type={isPasswordField && showPassword ? "text" : type}
          placeholder={placeholder}
          autoComplete="off"
          required={required}
          className={clsx(
            "w-full pr-12 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500",
            className
          )}
        />

        {isPasswordField && (
          <button
            type="button"
            className="absolute right-2 top-3/6 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {error && (
        <span className="block mt-1 text-sm font-medium text-red-500 dark:text-red-700">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default InputComponent;
