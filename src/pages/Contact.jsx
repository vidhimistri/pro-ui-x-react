export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting!");
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Name: Vidhi Mistri</p>
      <p>Email: yourmail@gmail.com</p>
      <p>Phone: +91XXXXXXXXXX</p>

      <form onSubmit={handleSubmit}>
        <textarea placeholder="Your Message"></textarea><br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
