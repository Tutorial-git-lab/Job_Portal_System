import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Career from "./Pages/Career";
import Login1 from "./Pages/Login1";
import Register from "./Pages/Register";
import NoPage from "./Pages/NoPage";
import AdminLayout from "./Pages/AdminLayout";
import JobSeekerReport from "./Pages/JobSeekerReport";
import FeedBackReport from "./Pages/FeedBackReport";
import AssignRole from "./Pages/AssignRole";
import ChangeRole from "./Pages/ChangeRole";
import Logout from "./Pages/Logout";
import CompanyLayout from "./Pages/CompanyLayout";
import FindCandidates from "./Pages/FindCandidates";
import PostNewJob from "./Pages/PostNewJob";
import PostedJob from "./Pages/PostedJob";
import MyAccount from "./Pages/MyAccount";
import AppliedJob from "./Pages/AppliedJob";
import ChangePassword from "./Pages/Change Password";
import MyInbox from "./Pages/MyInbox";
import Sent from "./Pages/Sent";
import JobseekerLayout from "./Pages/JobseekerLayout";
import FindJob from "./Pages/FindJob";
import JobSeekerAccount from "./Pages/JobSeekerAccount";
import JobMatch from "./Pages/JobMatch";
import JobSeekerRegistration from "./Pages/JobSeekerRegister";
import CompanyRegister from "./Pages/CompanyRegister";
import Login from "./Pages/Login";
import SearchBox from "./Pages/SearchBox";
import Header from "./Pages/Header";
import Header2 from "./Pages/Header2";
import ProfileMatch from "./Pages/ProfileMatch";
import CompanyReport from "./Pages/CompanyReport";

export default function App() {
  return (
    <>
      <div className="container-fluid p-3 border">
        <BrowserRouter>
          <div className="container-fluid  my-2 border">
            <div className="row">
              <div className="col-4 d-flex-col border">
                <Header />
              </div>
              <div className="col-8 d-flex-col border">
                <Header2 />
              </div>
            </div>
          </div>

          <div className="col-12 d-flex-col border">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="services" element={<Services />} />

                <Route path="career" element={<Career />} />
                <Route path="login1" element={<Login1 />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<NoPage />} />
              </Route>

              <Route path="/admin" element={<AdminLayout />}>
                <Route path="jobseekerreport" element={<JobSeekerReport />} />
                <Route path="companyreport" element={<CompanyReport />} />
                <Route path="feedbackreport" element={<FeedBackReport />} />
                <Route path="assignrole" element={<AssignRole />} />
                <Route path="changerole" element={<ChangeRole />} />
                <Route path="logout" element={<Logout />} />
              </Route>

              <Route path="/company" element={<CompanyLayout />}>
                <Route path="findcandidate" element={<FindCandidates />} />
                <Route path="postnewjob" element={<PostNewJob />} />
                <Route path="postedjob" element={<PostedJob />} />
                <Route path="companyaccount" element={<MyAccount />} />
                <Route path="profilematch" element={<ProfileMatch />} />
                <Route path="appliedjob" element={<AppliedJob />} />
                <Route path="changepassword" element={<ChangePassword />} />
                <Route path="myinbox" element={<MyInbox />} />
                <Route path="sent" element={<Sent />} />
                <Route path="logout" element={<Logout />} />
              </Route>

              <Route path="/jobseeker" element={<JobseekerLayout />}>
                <Route path="findjob" element={<FindJob />} />
                <Route path="jobseekeraccount" element={<JobSeekerAccount />} />
                <Route path="jobmatch" element={<JobMatch />} />
                <Route path="appliedjob" element={<AppliedJob />} />
                <Route path="changepassword" element={<ChangePassword />} />
                <Route path="myinbox" element={<MyInbox />} />
                <Route path="sent" element={<Sent />} />
                <Route path="logout" element={<Logout />} />
              </Route>

              <Route
                path="jobseeekerregister"
                element={<JobSeekerRegistration />}
              ></Route>
              <Route
                path="companyRegister"
                element={<CompanyRegister />}
              ></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="searchbox" element={<SearchBox />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
