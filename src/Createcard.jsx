import React from "react";

const CreateCard = () => {
  return (
    <div>
      <header>
        <h1>Pet Land</h1>
        <nav>
          <button>
            <span role="img">👤</span>
            Loginn
          </button>
        </nav>
      </header>
      <main>
        <div className="card">
          <h2>Welcome to Petland</h2>
          <em>Find dream pet</em>
        </div>
        <div className="card">
          <h2>WHat pets would you like to see?</h2>
          <div>
            <button>
              <span role="img">😸</span>
              Cats
            </button>
            <button>
              <span role="img">🐕</span>
              Dogs
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateCard;
