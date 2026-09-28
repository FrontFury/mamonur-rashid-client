import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ResearchNPublications from "../pages/ResearchNPublications/ResearchNPublications/ResearchNPublications";
import ProfessionalExperience from "../pages/ProfessionalExperience/ProfessionalExperience/ProfessionalExperience";
import ProfessionalDevelopment from "../pages/ProfessionalDevelopment/ProfessionalDevelopment/ProfessionalDevelopment";
import AcademicBackground from "../pages/AcademicBackground/AcademicBackground/AcademicBackground";
import Skills from "../pages/Skills/Skills/Skills";
import HonorsNAwards from "../pages/HonorsNAwards/HonorsNAwards/HonorsNAwards";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "research-publications",
        element: <ResearchNPublications/>
      },
      {
        path: "professional-experience",
        element: <ProfessionalExperience/>
      },
      {
        path: "professional-development",
        element: <ProfessionalDevelopment/>
      },
      {
        path: "academic-background",
        element: <AcademicBackground/>
      },
      {
        path: "skills",
        element: <Skills/>
      },
      {
        path: "honors-awards",
        element: <HonorsNAwards/>
      },
    ],
  },
]);