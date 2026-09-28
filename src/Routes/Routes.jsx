import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ResearchNPublications from "../pages/ResearchNPublications/ResearchNPublications/ResearchNPublications";
import ProfessionalExperience from "../pages/ProfessionalExperience/ProfessionalExperience/ProfessionalExperience";
import ProfessionalDevelopment from "../pages/ProfessionalDevelopment/ProfessionalDevelopment/ProfessionalDevelopment";


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
    ],
  },
]);