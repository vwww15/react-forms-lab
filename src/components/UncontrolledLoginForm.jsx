
import { useRef } from 'react';

function UncontrolledLoginForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Завдання 2. Некерована форма</h2>

      <div>
        <label>
          Ім'я:
          <input type="text" ref={nameRef} />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input type="email" ref={emailRef} />
        </label>
      </div>

      <button type="submit">Відправити</button>
    </form>
  );
}

export default UncontrolledLoginForm;
