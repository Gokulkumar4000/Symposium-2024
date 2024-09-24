import React from 'react';

const Header: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white min-h-[218px] rounded-xl"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url('https://cdn.usegalileo.ai/stability/62ae6c4c-5a69-4324-86cf-eec2ce8fc8ac.png')",
      }}
    >
      <div className="flex p-4">
        <p className="text-white tracking-light text-[28px] font-bold leading-tight">
          Registration
        </p>
      </div>
    </div>
  );
};

export default Header;
