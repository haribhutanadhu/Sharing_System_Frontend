import Navbar from '../components/navbar';
import Uses from '../components/uses';
import Footer from '../components/footer';
import Card from '../components/homecard';
import cycleimg from '../assets/cycle.jpg';
import electronicimg from '../assets/electronic.jpg';
import sportimg from '../assets/sport.jpg';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function home() {
    return (
        <div>
            <Navbar></Navbar>
            <Uses></Uses>
            <div className="sectioncard">
                <div className='container-fluid d-flex justify-content-center'>
                    <div className='row'>
                        <div className=' col-md-4'>
                            <Card img={cycleimg} title="Cycle" link="/cyclespage"></Card>
                        </div>
                        <div className='col-md-4'>
                            <Card img={electronicimg} title="Electronics" link="/electronicspage"></Card>
                        </div>
                        <div className='col-md-4'>
                            <Card img={sportimg} title="Sports" link="/sportspage"></Card>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default home;