import { FaEdit,FaCopy } from "react-icons/fa";
import "./dashboard.css";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import ClipboardJS from "clipboard";
new ClipboardJS(".button");

function UrlEditor() {
  const [editMode, setEditMode] = useState(false);
  const [url, setUrl] = useState("https://example.com");
  const [tempUrl, setTempUrl] = useState(url);
  const [isLoading, setIsLoading] = useState(false);

  const handleEditClick = () => {
    setTempUrl(url);
    setEditMode(true);
  };

  const handleUrlChange = (event) => {
    setTempUrl(event.target.value);
  };
  const handleSaveClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setUrl(tempUrl);
      setEditMode(false);
      setIsLoading(false);
    }, 2000);
  };

  const handleCancelClick = () => {
    setTempUrl(url);
    setEditMode(false);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    
    <div>
      {editMode ? (
        <div>
          <input
            type="text"
            value={tempUrl}
            onChange={handleUrlChange}
            id="input"
           className= "copy-update-label eds-text-weight--heavy"
          />

          <button className="btnn-n"onClick={handleCancelClick} disabled={isLoading}>
            <u className="btnn-n">Cancel</u>
          </button>
          <button  className="btnn-n" onClick={handleSaveClick} disabled={isLoading}>
            {isLoading ? (
              <ClipLoader color="#ffffff" loading={isLoading} size={15} />
            ) : (
              <u>Save</u>
            )}
          </button>
        </div>
      ) : (
        <div>
         <span classname="buttonselect"> {url}</span>
          <button
            className="icon-button-combo--button"          
            onClick={handleEditClick}
            disabled={isLoading}
            
          >
            <FaEdit className="eds-tooltip--hoc-wrapper" />
          </button>
          <button
            onClick={handleCopyClick}
            title="copy"
            data-clipboard-action="copy"
            data-clipboard-target="#input"
            className="icon-button-combo--button eds-l-mar-left-3"
          >
            <FaCopy />
          </button>
        </div>
      )}
    </div>
  );
}

export default UrlEditor;
