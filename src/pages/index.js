import CoronaviruStatus from '../components/coronavirustatus'

const Index = () => {
    return (
        <React.Fragment>
            <h1 className='header'>عدد المصابين والمشافين والوفيات من فايروس كورونا في العراق</h1>
            <span className='verfy'>
                كل المعلومات عن طريق مركز جامعة جونز هوبكنز لعلوم وهندسة النظم
            </span>
            <hr style={{marginTop: '50px'}}/>
            <div className='container'>
                <CoronaviruStatus status='confirmed' background='red'/>
                <CoronaviruStatus status='recovered' background='red'/>
                <CoronaviruStatus status='deaths' background='red'/>
            </div>
        </React.Fragment>
    )
};

export default Index;
