import React from 'react'
import './Grades.css'
import GradesGrid from './GradesGrid'
import { Line } from 'react-chartjs-2';

const GradesData = [
    {
        key: 1,
        classCode: "INF0001",
        classTitle: "Cours 1",
        credit: 3,
        grade: "A+",

    },
    {
        key: 2,
        classCode: "INF0002",
        classTitle: "Cours 2",
        credit: 3,
        grade: "A-",

    },
    {
        key: 3,
        classCode: "INF0003",
        classTitle: "Cours 3",
        credit: 3,
        grade: "A",

    }
]

const data = {
    labels: ['H219', 'E2019', 'A2019', 'H2020', 'E2020', 'A2020'],
    datasets: [
      {
        label: 'GPA',
        data: [2.5, 2.6, 2.7, 2.5, 2.8, 3],
        fill: false,
        backgroundColor: 'rgb(0, 139, 139)',
        borderColor: 'rgba(0, 139, 139, 0.2)',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

const Grades = () => {
    return (
        <div className="grades-wrapper">
            <div className="stats">
                <div className="gpaGraph">
                    <Line data={data} options={options} />
                </div>
                <div className="topGrades">
                    <h3>Top Grades</h3>
                    <ul className="gradeList">
                        {GradesData.map((grade) => (
                            <li className="gradeListItem" key={grade.key}>
                                {grade.classCode} ______________________ {grade.grade}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="grades">
                <GradesGrid />
            </div>
        </div>
    );
}

export default Grades;