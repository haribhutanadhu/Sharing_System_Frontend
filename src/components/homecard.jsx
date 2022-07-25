import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cycleimg from '../assets/cycle.jpg'

function BasicExample(props) {
    return (
        <div className='card-section'>
                        <div className='card text-center'>
                            <div className='overflow'>
                                <img src={props.img} alt='image' className='card-img-top'></img>
                            </div>
                            <div className='card-body text-dark'>
                                <h4>{props.title}</h4>
                                <a href={props.link} ><Button variant="light">More</Button>{' '}</a>
                            </div>
                        </div>
                    </div>
    );
}

export default BasicExample;