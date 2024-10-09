import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './NewEntry.css'

function NewEntry() {
    return (
        <Form className='todoform'>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>ToDo Item</Form.Label>
                <Form.Control type="text" placeholder="Add ToDo Item" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Todo
            </Button>
        </Form>
    );
}

export default NewEntry;