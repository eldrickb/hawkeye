const Course = (props) => {
    const [courseData, updateCourseData] = useState(false);
    return (
        <div>
            <p>{props.courseData.id}</p>
            <p>Prof</p>
        </div>
    );
};

export default Course;
