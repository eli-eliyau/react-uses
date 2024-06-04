import React from "react";
import { useUserContext } from "./UseContext";

const UserProfile: React.FC = () => {
  const { name, setName } = useUserContext();

  return (
    <div>
      <p>User: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default UserProfile;
