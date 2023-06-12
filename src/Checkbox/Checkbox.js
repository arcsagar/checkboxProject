const Checkbox = (props) => {
  const { chValue, chChecked, readOnly } = props;
  console.log(chValue);
  return (
    <label class="dropdown-option">
      <input
        type="checkbox"
        disabled={readOnly}
        checked={chChecked}
        name="dropdown-group"
        value={chValue}
      />
      {chValue}
    </label>
  );
};

export default Checkbox;
