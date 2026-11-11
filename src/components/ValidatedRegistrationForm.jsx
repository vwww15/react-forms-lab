
import { useState } from 'react';

function ValidatedRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Ім'я обов'язкове";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email обов'язковий";
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Некоректний email';
    }

    if (!formData.password.trim()) {
      newErrors.password = "Пароль обов'язковий";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Форма успішно відправлена!');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Завдання 4. Валідація форми</h2>

      <div>
        <label>
          Ім'я:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        {errors.name && (
          <p style={{ color: 'red' }}>{errors.name}</p>
        )}
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && (
          <p style={{ color: 'red' }}>{errors.email}</p>
        )}
      </div>

      <div>
        <label>
          Пароль:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password}</p>
        )}
      </div>

      <button type="submit">Зареєструватися</button>
    </form>
  );
}

export default ValidatedRegistrationForm;
