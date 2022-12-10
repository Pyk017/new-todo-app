const InputBox = ({ genericFunction, placeholder }: any) => {
  return (
    <div className="input-group inputBox mb-3">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        onKeyUp={(e) => genericFunction(e)}
      />
    </div>
  );
};

export default InputBox;
