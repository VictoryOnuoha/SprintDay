import './Dashboard.scss';

function Dashboard () {
    return (
        <main className='dashboard'>
            <article className="dashboard__title-box" > 
                <h3 className='dashboard__title' >DASHBOARD</h3>
            </article>
            <article className='dashboard__message-box'>
                <p className='dashboard__message'>You have 4 tasks to do.</p>
                <p className='dashboard__message'>You have 5 days left till Sprint ends</p>
            </article>
            
            <article className='dashboard__active' >
                <h3 className='dashboard__active-title'>DUE SOON</h3>
            </article>
            <section className='dashboard__tasks' >
                <p className='dashboard__task'> P1 Meeting with investors</p>
                <p className='dashboard__task'> P2 Brand Photoshoot</p>
                <p className='dashboard__task' > P3 BET Brainstorm session</p>
            </section>
        </main>
    )
}

export default Dashboard;