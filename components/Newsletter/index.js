import { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('IDLE');
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState('LOADING');
    setErrorMessage(null);
    try {
      const response = await axios.post('/api/newsletter', { email });
      setState('SUCCESS');
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState('ERROR');
    }
  };

  return (
    <section>
      <div className="border-b-2 border-dark tw-p-sm">
        <h2 className="tw-font-subheading">Newsletter</h2>
      </div>

      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-2/5 border-b-2 lg:border-b-0">
          <p className="tw-p-lg">
            It includes interesting tech content as well as some information on
            how to live life to the fullest!
          </p>
        </div>

        <div className="w-full lg:w-3/5 flex justify-center items-center tw-p-lg border-t-2 lg:border-t-0 lg:border-l-2 border-dark">
          <input
            className="w-2/3 h-12 border-2 border-dark focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 "
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="tw-btn"
            type="button"
            disabled={state === 'LOADING'}
            onClick={subscribe}
          >
            {state === 'LOADING' ? 'Loading' : 'Subscribe'}
          </button>
        </div>
      </div>
      {state === 'ERROR' && <p className="">{errorMessage}</p>}
      {state === 'SUCCESS' && <p className="">Success!</p>}
    </section>
  );
};

export default Newsletter;
