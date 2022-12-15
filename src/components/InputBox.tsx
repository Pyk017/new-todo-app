import { useRef } from "react";

const InputBox = ({ genericFunction, placeholder }: any) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="input-group inputBox mb-3">
      <input
        type="text"
        ref={inputRef}
        className="form-control"
        placeholder={placeholder}
        onKeyUp={(e) => genericFunction(e)}
      />
      <button
        className="btn btn-primary"
        type="button"
        onClick={(e) => genericFunction(e, inputRef.current?.value)}
      >
        Add Task
      </button>
    </div>
  );
};

export default InputBox;
