
import { useState } from 'react';

function ProfileForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Дані профілю:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Завдання 3. Багатопольова форма</h2>

      <div>
        <label>
          Ім'я:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Прізвище:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Дата народження:
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit">Зберегти</button>
    </form>
  );
}

export default ProfileForm;
