import React from 'react';
import styles from './Home.module.scss';

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.about}>
                <div className={styles.welcome}>
                    <h2> Wecome</h2>
                    <h1> I'm <span className={styles.name}>Felipe Souza Dias</span></h1>
                    <p> I am a Computer Science Bacheler student at the University of Central Florida. Planning on graduating May 2024</p>
                </div>

                <div className={styles.links}>
                    <button> GitHub </button>
                    <button> Resume </button>
                    <button> Linkdin </button>
                </div>
            </div>


            
            <div className="skills">
                <h1> Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                            ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
                            Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
                            MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
