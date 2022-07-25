import Navbar from '../components/navbar';
import Uses from '../components/uses';
import Footer from '../components/footer';
import CardHome from '../components/homecard';
import cycleimg from '../assets/cycle.jpg';
import electronicimg from '../assets/electronic.jpg';
import sportimg from '../assets/sport.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const x = {
    "padding": "2% 7%",
}
const tablebg = {
    "padding": "2% 7%",
    "background" : "#A5BECC",
}
const tableborder = {
    "border" : "1px solid black",
    "border-collapse": "collapse",
}
const textcenter = {
    "text-align" : "center",
}

function cyclespage() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="sectioncard">
                <div className='container-fluid d-flex justify-content-center'>
                    <div className='row'>
                        <div className=' col-lg-6' style={x}>
                            <CardHome img={sportimg} title="Sports" link="/cyclespage"></CardHome>
                        </div>
                        <div className='col-lg-6' style={x}>
                            <Card >
                                <Card.Body>
                                    <Card.Title style={textcenter}>Card Title</Card.Title>
                                    <Card.Text>
                                        <form>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Name</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                            </div>
                                            <br></br>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Email</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                            </div>
                                            <br></br>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Contact</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                            </div>
                                            <br></br>
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Type</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                            </div>
                                            <br></br>
                                            <div style={textcenter}>
                                            <button style={textcenter} type="submit" class="btn btn-primary ">Submit</button>
                                            </div>
                                            
                                        </form>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div style={tablebg}>
            <Table striped bordered hover >
                <thead style={tableborder}>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody style={tableborder}>
                    <tr>
                        <td >1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default cyclespage;