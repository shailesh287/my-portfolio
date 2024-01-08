import { motion } from 'framer-motion';
import '../../App.css'
import "./experience.css"

const data = [
  {
    id: 1,
    company: 'Cryptonaukri',
    role: 'Software Developer Intern',
    fromDate: new Date('2022-04-04'),
    toDate: new Date('2022-07-04'),
    tasks: [
      'Built an QnA forum application',
      'Worked extensively on React.js and TailwindCSS',
      'Built User Interfaces, fixed bugs, and integrated APIs',
      'Collaborated with backend and UI Developers',
    ],
  },
  {
    id: 2,
    company: 'IIT Delhi',
    role: 'Full-stack Developer',
    fromDate: new Date('2022-08-24'),
    toDate: new Date('2022-10-24'),
    tasks: [
      'Managed an Annotation Tool that visualizes annotators’ behavior based on word complexity',
      'Technologies worked on: React, Node.js, Express, and MongoDB',
      'Optimized the code, fixed bugs, built and integrated APIs.',
    ],
  },
  {
    id: 3,
    company: 'CollegeToppr',
    role: 'Software Developer Intern',
    fromDate: new Date('2022-11-07'),
    toDate: new Date('2023-05-07'),
    tasks: [
      'Built more than 30+ client projects from landing pages to full-stack web applications',
      'Worked on Reactjs, Node.js, Express, MongoDB, Tailwindcss, and Graphql',
    ],
  },
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Experience = () => {
  const monthDiff = (dateFrom, dateTo) => {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  };

  return (
    <div className='mainContainer'>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className='sectionTitle'>Work Experience</h1>

        <ul className='timeLine'>
          {data
            .sort((a, b) => b.fromDate.getTime() - a.fromDate.getTime())
            .map((ex) => (
              <li className='timeLineItem' key={ex.id}>
                <div className='experience_header'>
                  <h3>
                    {ex.role}, {ex.company}
                  </h3>

                  <small style={{opacity:'0.8'}}>
                    {months[ex.fromDate.getMonth()] +
                      ' ' +
                      ex.fromDate.getFullYear()}{' '}
                    -{' '}
                    {months[ex.toDate.getMonth()] +
                      ' ' +
                      ex.toDate.getFullYear()}{' '}
                    ({monthDiff(ex.fromDate, ex.toDate)}{' '}
                    {monthDiff(ex.fromDate, ex.toDate) > 1 ? 'Months' : 'Month'}
                    )
                  </small>
                </div>

                <ul className='task_list'>
                  {ex.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Experience;

