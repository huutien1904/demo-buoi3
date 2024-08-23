import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./../css/LoveItNow.css";
export default function LoveItNow() {
  return (
    <>
      <Row xs={12}>
        <Col xs={9}>
          <h1 className="title_love_it">Yêu thích ngay</h1>
          <Row>
            <Col xs={6}>
              <div>
                <img src="./public/img1.png" className="img-fluid" />
              </div>
            </Col>
            <Col xs={6}>
              <div className="d-flex align-items-center">
                <p>
                  Thêm ngay vào mục yêu thích để nhận được thông báo mỗi khi sản
                  phẩm có ưu đãi
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
