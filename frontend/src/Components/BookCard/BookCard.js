import { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import BookAdd from "../BookAdd/BookAdd";
import { SELECT_BOOK } from "../../bookRedux/action";

export default function BookCard(props) {
    const [popupShow, setPopupShow] = useState(false);
    const dispatch = useDispatch();
    const selectBook = (data) => {
        props.compareItemRef.current = [...props.compareItemRef.current, data]
        console.log("props.compareItemRef", props.compareItemRef.current);
        dispatch(SELECT_BOOK(props.compareItemRef.current))
    }
    const showBookPopup = () => {
        setPopupShow(!popupShow)
    }
    return (
        <>


            <Col sm={6}>
                <Card className="mb-4 h-100">
                    <Card.Body>
                        <Row>
                            <Col md="auto">
                                <Card.Img style={{ maxWidth: "150px" }} variant="top" src={props.bookItem.imgName} />
                            </Col>
                            <Col>
                                <div className="action-icons">
                                    <Button variant="link" onClick={() => { showBookPopup() }}>
                                        <i className="bi bi-pencil"></i>
                                    </Button>
                                    <Button variant="link">
                                        <i className="bi bi-trash3"></i>
                                    </Button>
                                </div>
                                <Card.Title>{props.bookItem.name}</Card.Title>
                                <Card.Text className="mb-1">By: {props.bookItem.author}</Card.Text>
                                <Card.Text className="mb-1">category: {props.bookItem.category}</Card.Text>
                                <Card.Text className="mb-1">price: {props.bookItem.price}</Card.Text>
                                <Card.Text className="mb-1">language: {props.bookItem.language}</Card.Text>
                                <Card.Text className="mb-4">
                                    <a href={props.bookItem.pdfName}>Download</a>
                                </Card.Text>
                                <Button
                                    variant={"primary"}
                                    onClick={() => { selectBook(props.bookItem) }}
                                >
                                    Select
                                </Button>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
            </Col>

            <BookAdd popupShow={popupShow} showBookPopup={showBookPopup} />
        </>

    )
}