
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Lesson from "./Lesson"
import Game from './Lesson/Game'
import Personal from "./PersonalArea"
import Alerts from "./PersonalArea/alertPopup"
import Profile from "./PersonalArea/profile"
import { LessonContextProvider } from "../../context/lessonContext"
import HomePage from "./HomePage"
import LearningPlan from "./LearningPlan"
export default function Routing() {
  return <>
    <LessonContextProvider>
      <Routes>
        <Route path="/my-lesson" element={<Lesson></Lesson>} />
        <Route path="/personal-area" element={<Personal></Personal>} />
        <Route path="/our-vision" element={<></>} />
        <Route path="/learning-plan" element={<LearningPlan></LearningPlan>} />
        <Route path="/alerts" element={<Alerts></Alerts>} />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/" element={<HomePage></HomePage>} />
      </Routes>
    </LessonContextProvider></>
}