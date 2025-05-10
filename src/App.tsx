import styles from "./App.module.css";
import Stepper from "./components/Basic/Stepper/Stepper";
import EducationTimeline from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import data from './resume.json';


function App() {
  return (
    <div className={styles.main}>
      <Stepper />
      <div>
        <Main details={data.details}/>
       <Experience/>
       <Skills/>
       <EducationTimeline/>
      </div>
    </div>
  );
}

export default App;
