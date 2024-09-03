import '../../styles/ThankYouMessage.css';

// Include main element so the message will be displayed in the content area
export default function ThankYouMessage() {
  return (
    <main>
      <div className="message-container">
        <h2>Thank you for your message!</h2>
        <p>I will get back to you as soon as possible.</p>
      </div>
    </main>
  );
}
