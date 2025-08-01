import { 
  FaUmbrella, FaGithub, FaLinkedin, FaEnvelope, FaInfoCircle, 
  FaBullseye, FaTools, FaRobot, FaCheckCircle, FaCode, 
  FaChartLine, FaLightbulb, FaHandshake
} from 'react-icons/fa'
import bumbershootLogo from './assets/bumbershoot-logo.png'
import { companyInfo, sections } from './content'
import '@fontsource/roboto'
import '@fontsource/poppins'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header>
        <div className="logo-container">
          <img src={bumbershootLogo} alt="Bumbershoot Unlimited Logo" className="logo" />
          <h1>{companyInfo.name}</h1>
        </div>
        <nav>
          {sections.map(section => (
            <a key={section.id} href={`#${section.id}`}>{section.title.split(':')[0]}</a>
          ))}
        </nav>
      </header>

      <main>
        <div className="content">
          {sections.map(section => {
            // Select icon based on section id
            let SectionIcon;
            switch(section.id) {
              case 'about':
                SectionIcon = FaInfoCircle;
                break;
              case 'mission':
                SectionIcon = FaBullseye;
                break;
              case 'services':
                SectionIcon = FaTools;
                break;
              case 'approach':
                SectionIcon = FaRobot;
                break;
              case 'why-us':
                SectionIcon = FaCheckCircle;
                break;
              default:
                SectionIcon = FaUmbrella;
            }
            
            return (
              <section key={section.id} id={section.id} className="content-section">
                <h2>
                  <SectionIcon className="section-icon" />
                  <span>{section.title}</span>
                </h2>
                {section.content && <p>{section.content}</p>}
                {section.bulletPoints && (
                  <ul className="feature-list">
                    {section.bulletPoints.map((point, index) => {
                      // Select icon for bullet points based on content
                      let BulletIcon;
                      if (point.includes('Software Development') || point.includes('specific tools')) {
                        BulletIcon = FaCode;
                      } else if (point.includes('Workflow') || point.includes('Efficiency')) {
                        BulletIcon = FaChartLine;
                      } else if (point.includes('AI')) {
                        BulletIcon = FaRobot;
                      } else if (point.includes('Partnership')) {
                        BulletIcon = FaHandshake;
                      } else {
                        BulletIcon = FaLightbulb;
                      }
                      
                      return (
                        <li key={index} className="feature-item">
                          <BulletIcon className="bullet-icon" />
                          <span>{point}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>
            );
          })}
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <FaUmbrella className="footer-icon" />
            <p>Bumbershoot Unlimited, LLC</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/bumbershoot-unlimited" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/company/bumbershoot-unlimited" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:contact@bumbershoot-unlimited.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Bumbershoot Unlimited, LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
