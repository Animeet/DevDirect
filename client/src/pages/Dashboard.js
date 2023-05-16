
function Dashboard (props) {
    return (
        <h1>Hello {props.type === 'student' ? 'Student':'Employer'}</h1>
    )
}

export default Dashboard;