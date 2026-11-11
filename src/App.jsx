
import RegistrationForm from './components/RegistrationForm.jsx';
import UncontrolledLoginForm from './components/UncontrolledLoginForm.jsx';
import ProfileForm from './components/ProfileForm.jsx';
import ValidatedRegistrationForm from './components/ValidatedRegistrationForm.jsx';

function App() {
  return (
    <main>
      <h1>Лабораторна робота: Форми в React</h1>

      <RegistrationForm />

      <hr />

      <UncontrolledLoginForm />

      <hr />

      <ProfileForm />

      <hr />

      <ValidatedRegistrationForm />
    </main>
  );
}

export default App;
