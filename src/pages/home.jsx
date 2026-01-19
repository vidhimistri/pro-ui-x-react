import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1 className="fade">Frontend Developer Skills</h1>
      <p className="slide">HTML • CSS • JavaScript • React</p>
      <button onClick={() => navigate("/skills")}>Get Started</button>
    </section>
  );
}
