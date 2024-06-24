import { Button, Col, Container, Row, Table } from "react-bootstrap";
import BookCard from "../BookCard/BookCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookAdd from "../BookAdd/BookAdd";
import axios from "axios";

export default function BookList() {
    const [popupShow, setPopupShow] = useState(false);
    const [isAdmin, setAdmin] = useState(true);
    const [bookListData, setbookListData] = useState()
    const navigate = useNavigate()
    const bookData = useSelector(state => state.bookData);
    const compareItemRef = useRef([]);
    localStorage.setItem("compareList", JSON.stringify([]));
    
    const showBookPopup = () => {
        setPopupShow(!popupShow)
    }

    const bookRow = bookData && bookData.map((bookItem) => {
        return <BookCard key={bookItem.id} isAdmin={isAdmin} bookItem={bookItem} compareItemRef={compareItemRef} />
    })
    let bookTableKey = Object.keys(bookData[0]);
    return (
        <Container className="py-4">
            <Row className="mb-4">
                <Col sm={12} className="d-flex justify-content-end">
                    {isAdmin &&
                        <Button variant="success" onClick={() => { showBookPopup() }}>Add Book</Button>
                    }
                </Col>
            </Row>
            
                    <Row>
                        {bookRow}
                    </Row>
            

            <BookAdd popupShow={popupShow} showBookPopup={showBookPopup} />
        </Container>
    )
}