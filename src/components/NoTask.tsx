const NoTask = ({ message }: any) => {
  return (
    <div className="list-group-div">
      <div className="image-div d-flex flex-column justify-content-center align-items-center mt-5">
        <img src="/empty-box.png" alt="no-task-icon" width="64" height="64" />
        <h4 className="display-6">{message}</h4>
      </div>
    </div>
  );
};

export default NoTask;
