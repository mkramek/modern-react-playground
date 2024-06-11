import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import debounce from "lodash.debounce";

export default function FunctionalComponent() {
  const [formState, setFormState] = useState();
  const [form, updateForm] = useState({
    login: "",
    password: "",
  });

  function handleChange(ev) {
    const { value, name } = ev.currentTarget;
    updateForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    setFormState("wysłany");
  }

  function handleReset() {
    updateForm({
      login: "",
      password: "",
    });
    setFormState("wyczyszczony");
  }

  useEffect(() => {
    if (form.login || form.password) {
      console.log('Uruchamianie zmiany stanu na "wypełniany"');
      setFormState("wypełniany");
    } else {
      console.log('Uruchamianie zmiany stanu na "pusty"');
      setFormState("pusty");
    }
  }, [form.login, form.password]);

  useEffect(() => {
    if (!formState) {
      setFormState("pusty");
    } else {
      toast(`Formularz jest ${formState}`, {
        position: "top-center",
        duration: 2500,
      });
    }
  }, [formState]);

  useEffect(() => {
    const reportClick = () => {
      console.log("click!");
    };
    window.addEventListener("click", reportClick);

    return () => {
      window.removeEventListener("click", reportClick);
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      style={{ height: "300vh" }}>
      <div>
        <input
          placeholder="login"
          type="text"
          name="login"
          value={form.login}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          placeholder="password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit">Zaloguj</button>
        <button type="reset">Wyczyść</button>
      </div>
    </form>
  );
}
