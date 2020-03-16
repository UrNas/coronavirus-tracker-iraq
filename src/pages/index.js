import CoronaviruStatus from '../components/coronavirustatus'

const Index = () => {
    const today = new Date().toString().split(' ').slice(0, 4).join(' ')
    return (
        <React.Fragment>
            <h1 className='header'>عدد المصابين والمشافين والوفيات من فايروس كورونا في العراق</h1>
            <span className='verfy'>
                كل المعلومات عن طريق مركز جامعة جونز هوبكنز لعلوم وهندسة النظم
            </span>
            <h4>{today}</h4>
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
