import ContactUs from './ContactUs';
import Downloads from './Downloads';
import LiteratureSurvey from './LiteratureSurvey';
import MeetOurTeam from './MeetOurTeam';
import Methodology from './Methodology';
import ResearchGap from './ResearchGap';
import ResearchObjectives from './ResearchObjectives';
import ResearchProblem from './ResearchProblem';
import TechnologyUsed from './TechnologyUsed';
import TimeLines from './TimeLines';

type Props = {}

const HomePage = (props: Props) => {

  return (
    <div>
      <div className="intro" id="home">
        <h1 className="animate">AI-Powered Mobile Application for Cochlear Implant Users</h1>

      </div>

      <LiteratureSurvey />
      <ResearchGap />
      <ResearchProblem />
      <ResearchObjectives />
      <Methodology />
      <TechnologyUsed />
      <TimeLines />
      <Downloads />
      <MeetOurTeam />
      <ContactUs />

    </div>
  )
}

export default HomePage