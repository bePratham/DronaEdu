import Card from 'react-bootstrap/Card';
import data from '../../data.json';//here is the data
import style from './style.module.css';
import Star from './Star';
import { Link  } from 'react-router-dom';

function BestCourseCard() {
  const courses=data.Courses.slice(7,13);
  return (
    <div className={style.cardGrid}>
    {courses.map((course, index) => (
        <Card className={style.CardBox} key={index}>
          <div className={style.image}>
            <Link to={`/course/${course.id}`}>
            <Card.Img variant="top" height={'200px'} src={course.thumbnail} />
            </Link>
          </div>
          <Card.Body>
          <Link style={{textDecoration:'none',color:'#000'}} to={`/course/${course.id}`}>
            <Card.Title style={{  fontSize: '23px', fontWeight: '600' }}>
              {course.title}
            </Card.Title>
            </Link>
            <Card.Text style={{ fontSize: '18px' }}>
              {course.description}
            </Card.Text>
            <Star />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
export default BestCourseCard;