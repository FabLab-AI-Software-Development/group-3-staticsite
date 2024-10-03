import './App.css';
import Dropdown from './components/navigation/dropdown';
import Navigation from './components/navigation/navigation';

function App() {
  return (
  <div>  
    <div class="left-div">
        <Navigation />
    </div>
    <div class="centered-div">
        <br/><br/>
        <h2>Welcome to Horizon Human Resources</h2>
        <h2>Your A.I. Assistant for everyday Human Resources issues</h2>
        <br/>
        <h3>What do we do?</h3>
        <br/>
    <ul>
        <li> <b>Recruitment and Staffing:</b> HR companies help businesses find and hire qualified employees. This includes posting job ads, screening resumes, conducting interviews, and making job offers.</li>

        <li> <b>Employee Onboarding:</b> They assist with the onboarding process, ensuring new hires are smoothly integrated into the company, including handling necessary paperwork, training, and orientation.</li>

        <li> <b>Payroll and Benefits Administration:</b> HR companies manage payroll processing, ensuring employees are paid correctly and on time. They also handle benefits administration, such as health insurance, retirement plans, and other employee perks.</li>

        <li> <b>Compliance and Legal Issues:</b> They ensure that the company complies with labor laws and regulations, helping to avoid legal issues. This includes maintaining employee records, handling workplace disputes, and providing guidance on employment law.</li>

        <li> <b>Training and Development:</b> HR firms offer training programs and development opportunities to help employees improve their skills and advance in their careers.</li>

        <li> <b>Performance Management:</b> They help businesses develop and implement performance management systems, including setting performance standards, conducting evaluations, and managing promotions or disciplinary actions.</li>

        <li> <b>Employee Relations:</b> HR companies mediate between employees and management to resolve conflicts, improve communication, and maintain a positive workplace environment.</li>

        <li> <b>HR Consulting:</b> They provide expert advice on HR strategies, policies, and best practices to improve overall organizational effectiveness.</li>

        <br/>
        <p>By outsourcing these functions to Horizon Human Resources, your business can focus on their core operations while ensuring their HR needs are professionally managed.</p>
    </ul>
    </div>
  </div>  
  );
}

export default App;
