import React from 'react';

const About = () => {
    return (
        <div className='p-3'>
            <div className='border-4 border-indigo-600'>
            <h1 className='text-2xl text-center font-bold text-pink-400'>Some information of the application</h1>
            <div className='p-2'>
            <h3 className='text-2xl font-semibold mt-3 text-pink-400'>About Simmi Foundation Organization</h3>
            <p>Simmi Foundation is a not-for-profit, non-governmental organization that aims to work for the upliftment and betterment of society. We work on creating awareness about environmental and social issues through educational seminars and interactive classroom sessions. Our focus is on creating awareness among the youth and the younger generation. We also focus on social issues, working towards educating the younger generation about burning social problems, and talking about topics generally considered taboo in our society, for instance, menstruation, malnutrition, and safety measures for women during pregnancy.</p>
            <h3 className='text-2xl font-semibold text-pink-400'>Skill(s) required</h3>
            <div>
                <ol>
                    <li>CSS</li>
                    <li>English Proficiency (Written)</li>
                    <li>HTML</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Project Management</li>
                    <li>Python</li>
                    <li>ReactJS</li>
                    <li>Redux</li>
                    <li>REST API</li>
                </ol>
            </div>
            </div>
            </div>
        </div>
    );
};

export default About;