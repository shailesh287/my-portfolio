import { motion } from 'framer-motion';
import '../../App.css'
import "./experience.css"

const data = [
  {
    id: 1,
    company: 'Transerve Technologies Pvt. Ltd.',
    role: 'Front-End Developer',
    fromDate: new Date('2022-06-07'),
    toDate: new Date('2023-10-31'),
    tasks: [
    '  Spearheaded security risk assessment, reducing potential data breaches by 40%.',
'Integrated socket services for real-time data communication, enhancing system responsiveness by 30%.',
'Collaborated on web app enhancements, resulting in a 20% improvement in overall system performance.',
'Implemented RxJs and advanced services, optimizing data handling for a 25% reduction in processing time.',
'Engineered streamlined form validation, reducing user input errors by 50% and improving interactions.',
'Troubleshooted and resolved bugs, ensuring a flawless user experience with a 40% reduction in reported issues.',
'Developed a state-tailored Fecal Sludge Management solution, migrating to Vuexy template for enhanced efficiency.',
'Boosted system performance with dynamic lazy loading, ReactLeaflet integration, and Chart.js for data visualization.',
'Proficient in i18Next library for multi-lingual support and localization.'
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
                <div className='mb-2'>
                  <div className='experience_header'>
                  <h3>
                    {ex.company}
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
                  <h4 className='mt-[-10px] '>{ex.role}</h4>
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

