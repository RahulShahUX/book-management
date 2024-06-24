import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";


export default function BookAdd(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const AddBookSubmit = async(data) => {
        console.log("data", data);
        const response = await axios.post("http://localhost:8000/add", data);
        // setBookListData(response.data.result);
        console.log("response.data", response);
        props.showBookPopup();
    }
    return (
        <Modal show={props.popupShow} onHide={props.showBookPopup}>
            <Modal.Header closeButton>
                <Modal.Title>Add Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(AddBookSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            {...register("name", {
                                required: "Name is required",
                            })} />
                        {errors.name &&
                            <Form.Text className="text-danger">
                                {errors.name.message}
                            </Form.Text>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Price"
                            {...register("price", {
                                required: "Price is required",
                            })}
                        />
                        {errors.price &&
                            <Form.Text className="text-danger">
                                {errors.price.message}
                            </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicOs">
                        <Form.Label>OS</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Os"
                            {...register("os", {
                                required: "Os is required",
                            })}
                        />
                        {errors.os &&
                            <Form.Text className="text-danger">
                                {errors.os.message}
                            </Form.Text>
                        }
                    </Form.Group>
                    <div className="mt-4">
                        <Button variant="secondary" className="me-3" onClick={props.showBookPopup}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Book
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}