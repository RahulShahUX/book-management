import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate();

    const formLogin = (data) => {
        console.log("data", data);
        navigate("/book");
    }
    return (
        <section className="login-wrapper d-flex align-items-center justify-content-center">
            <Card body className="login-card p-4 my-4">
                <div className="text-center mb-4">
                    <img src="/logo.svg" alt="logo" />
                </div>
                <Form onSubmit={handleSubmit(formLogin)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Email is Invalid"
                                }
                            })} />
                        {errors.email &&
                            <Form.Text className="text-danger">
                                {errors.email.message}
                            </Form.Text>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            {...register("password", {
                                required: "Password is required",
                            })} 
                        />
                        {errors.password &&
                            <Form.Text className="text-danger">
                                {errors.password.message}
                            </Form.Text>
                        }
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        </section>
    )
}