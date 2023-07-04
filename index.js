const Box = (props) => {
  const { className, text } = props;
  const boxTextCenterClassName = `${className} center-text`;
  return (
    <div class={boxTextCenterClassName}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div class="main-container">
    <h1 class="heading">Boxes</h1>
    <div class="boxes-container">
      <Box className="small-container" text="Small" />
      <Box className="medium-container" text="Medium" />
      <Box className="large-container" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
