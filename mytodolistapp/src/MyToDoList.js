import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewEntry from './NewEntry';
import EntryLayout from './EntryLayout';
import './MyToDoList.css';

function MyTodoList() {
    return (
        <Container>
            <Row>
                <Col><h1 className='header'>My ToDo List</h1></Col>
            </Row>
            <br></br>
            <br></br>
            <Row>
                <Col sm={4}><NewEntry/></Col>
                <Col sm={8}><EntryLayout/></Col>
                
            </Row>
        </Container>
    );

}

export default MyTodoList;