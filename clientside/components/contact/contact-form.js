import { useState, useEffect } from 'react';
import styles from './contact-form.module.css';
import Notification from '@components/ui/notification';

async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(e) {
    e.preventDefault();

    setRequestStatus('pending');

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus('success');
      setEnteredMessage('');
      setEnteredEmail('');
      setEnteredName('');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }

  let notificationData;
  if (requestStatus === 'pending') {
    notificationData = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notificationData = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notificationData = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }
  // .contact {
  //   margin: var(--size-8) auto;
  //   border-radius: 6px;
  //   background-color: var(--color-grey-100);
  //   width: 90%;
  //   max-width: 50rem;
  //   padding: var(--size-4);
  //   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  //   font-size: var(--size-6);
  // }
  return (
    <section
      className="pb-8 mx-auto rounded-lg bg-emerald-400  max-w-[30rem] p-4 shadow-lg text-lg text-white
    xxxs:w-[95%] xxxs:-mb-5
    md:w-[100%] md:-mb-0"
    >
      <h3 className="mb-4 font-bold tracking-tight text-center">
        Send us a Message!
      </h3>
      <form
        onSubmit={sendMessageHandler}
        className="font-poppins p-1 rounded-md  border-2 border-emerald-200 
        w-[100%]"
      >
        <div className="">
          <div className="flex-1 min-w-[10rem] p-2 ">
            <label className="font-bold" htmlFor="email">
              Your email:
            </label>
            <input
              type="email"
              name=""
              id="email"
              required
              value={enteredEmail}
              onChange={e => setEnteredEmail(e.target.value)}
              className="font-family-inherit  p-1 m-1 rounded-md w-[95%] border-1 text-black outline-none border-stone-200 bg-white"
              placeholder="Insert email here"
            />
          </div>

          <div className="flex-1 min-w-[10rem] p-2">
            <label className="font-bold" htmlFor="name">
              Your name:
            </label>
            <input
              type="text"
              name=""
              id="name"
              required
              value={enteredName}
              onChange={e => setEnteredName(e.target.value)}
              className="font-family-inherit  p-1 m-1 rounded-md w-[95%] border-1 text-black outline-none border-stone-200 bg-white"
              placeholder="Insert name here"
            />
          </div>
        </div>
        <div className="flex-1 flex-col min-w-[10rem]">
          <label className="font-bold ml-2" htmlFor="message">
            Your message:
          </label>
          <textarea
            name=""
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={e => setEnteredMessage(e.target.value)}
            className="font-family-inherit  p-1 m-1 rounded-md w-[90%] ml-[1rem] border-1 border-stone-200 bg-white text-black outline-none"
            placeholder="Insert message here"
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button className="bg-white text-emerald-400 px-2 py-1 rounded-lg m-4  mr-6 hover:bg-emerald-300 hover:text-white active:bg-white active:text-emerald-400 transition-all .3s ease-linear ">
            Send Message
          </button>
        </div>
      </form>
      {notificationData && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
