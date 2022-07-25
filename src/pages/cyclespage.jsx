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
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

const x = {
    "padding": "2% 7%",
}
const tablebg = {
    "padding": "2% 7%",
    "background": "#A5BECC",
}
const tableborder = {
    "border": "1px solid black",
    "border-collapse": "collapse",
}
const textcenter = {
    "textAlign": "center",
}

function Cyclespage() {
    const [cycles, setCycles] = useState([])
    const [name, setName]=useState('')

    const handlesubmit = () => {
        console.log(name);
    }
    useEffect(() => {
        async function getAllCycle() {
            try {
                const cycles = await axios.get("http://127.0.0.1:8000/rental/cycle/")
                console.log(cycles.data)
                setCycles(cycles.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllCycle()
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className="sectioncard">
                <div className='container-fluid d-flex justify-content-center'>
                    <div className='row'>
                        <div className=' col-lg-6' style={x}>
                            <CardHome img={cycleimg} title="Cycle" link="/cyclespage"></CardHome>
                        </div>
                        <div className='col-lg-6' style={x}>
                            <Card >
                                <Card.Body>
                                    <Card.Title style={textcenter}>Card Title</Card.Title>
                                    <Card.Text>
                                        <form action='http://127.0.0.1:8000/cycle/' method="post" content-type="json/application">
                                            <div class="form-group">
                                                <label for="name">Name</label>
                                                <input type="name" class="form-control" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your Name"></input>
                                            </div>
                                            <br></br>
                                            <div class="form-group">
                                                <label for="email">Email</label>
                                                <input type="email" class="form-control" id="email" name="email" placeholder="Enter email"></input>
                                            </div>
                                            <br></br>
                                            <div class="form-group">
                                                <label for="phone">Contact</label>
                                                <input type="phone" class="form-control" id="phone" name="phone" placeholder="Enter contact"></input>
                                            </div>
                                            <br></br>
                                            <div class="form-group">
                                                <label for="describe">Type</label>
                                                <input type="describe" class="form-control" id="describe" name="describe" placeholder="Enter your text"></input>
                                            </div>
                                            <br></br>
                                            <div style={textcenter}>
                                                <button style={textcenter} type="submit" onClick={handlesubmit} class="btn btn-primary ">Submit</button>
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
                            <th>Contact</th>
                            <th>Email</th>
                            <th>describe</th>
                        </tr>
                    </thead>
                {cycles.map((cycle,i)=>{return(
                    <tbody style={tableborder}>
                        <tr>
                            <td >1</td>
                            <td>{cycle.name}</td>
                            <td>{cycle.email}</td>
                            <td>{cycle.contact}</td>
                            <td>{cycle.describe}</td>
                        </tr>
                    </tbody>
                    )})}
                </Table>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Cyclespage;