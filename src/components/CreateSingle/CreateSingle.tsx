import React from "react";
import "./CreateSingle.css";

const CreateSingle: React.FC = () => {
  return (
    <div className="create-single">
      <div className="form-group">
        <span className="input-lebel">Name:</span>
        <input
          type="text"
          className="create-single-form-control"
          placeholder="NFT Name"
          name="NFT Name"
        />
      </div>
    </div>
  );
};

export default CreateSingle;
