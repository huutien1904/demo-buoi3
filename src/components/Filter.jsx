import "./../css/filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
export default function Filter() {
  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Tìm kiếm" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <Form.Select aria-label="Default select example" size="lg">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
}
