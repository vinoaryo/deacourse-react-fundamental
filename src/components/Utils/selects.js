import Form from "react-bootstrap/Form";

const Selects = ({ option }) => {
  return (
    <>
      <br />
      <Form.Select>
        {/* Map the  option */}
        {option.map((item, i) => {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          );
        })}
      </Form.Select>
      <br />
    </>
  );
};

export default Selects;
