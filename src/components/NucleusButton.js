import Link from 'next/link';
import Button from 'react-bootstrap/Button';

export const NucleusButton = () => {
    return (
        <div className="project-button-container">
            <Button className="project-button"><Link href="/detail">Show Me More</Link></Button>
        </div>
    )
}