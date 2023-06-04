import React from "react";
import Github from "./Github";
import { useState } from "react";

export default function Content() {
  const [value, setValue] = useState("");
  const [user, setUser] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(value);
    setValue("");
  };
  return (
    <div className="content-container">
      <header>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              value={value}
              onChange={handleChange}
              type="text"
              placeholder="Ara..."
            />
          </div>
          <button>Ara</button>
        </form>
      </header>
      <Github gitUser={user} />
    </div>
  );
}
