import {
  RouterProvider,
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
} from "react-router-dom";

// Pages
import Home from './pages/Home.js';
import About from './pages/About.js'
import NoFound from './pages/NoFound.js'
import Faq from './pages/help/Faq.js'
import Contact, { contactAction } from './pages/help/Contact.js'
import Careers, { careersLoader } from "./pages/careers/Careers.js";
import CareersError from "./pages/careers/CareersError.js";

// Layouts
import RootLayout from "./layouts/RootLayout.js";
import HelpLayout from "./layouts/HelpLayout.js";
import CareersLayout from "./layouts/CareersLayout.js";
import CareerDetails, { CareerDetailsLoader } from "./pages/careers/CareerDetails.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq/>}/>
          <Route path="contact" element={<Contact/>} action={contactAction}/>
        </Route>

        <Route path="careers" element={<CareersLayout/>} errorElement={<CareersError/>}>
          <Route
            index
            element={<Careers/>}
            loader={careersLoader}
          />

          <Route 
            path=":id"
            element={<CareerDetails/>}
            loader={CareerDetailsLoader}
          />
        </Route>

        <Route path="*" element={<NoFound />} />

    </Route>
  )
);

function App() {
  return (
      <header>
        <RouterProvider router={router}/>
      </header>
  );
}

export default App
