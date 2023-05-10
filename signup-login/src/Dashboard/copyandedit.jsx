import { FaEdit, FaCopy } from "react-icons/fa";
import "./dashboard.css";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import ClipboardJS from "clipboard";
new ClipboardJS(".button");
/**
 * React component for editing and copying a URL.
 * @function UrlEditor
 * @returns {JSX.Element} Rendered React component
 */
function UrlEditor() {
  /**
   * Boolean state to track whether the component is in edit mode or not.
   * @type {[boolean, function]} editMode - [initialValue, updaterFunction]
   */
  const [editMode, setEditMode] = useState(false);
  /**
   * State to hold the current URL.
   * @type {[string, function]} url - [initialValue, updaterFunction]
   */
  const [url, setUrl] = useState("https://example.com");
  /**
   * State to hold the URL being edited.
   * @type {[string, function]} tempUrl - [initialValue, updaterFunction]
   */
  const [tempUrl, setTempUrl] = useState(url);
  /**
   * Boolean state to track whether the component is currently loading.
   * @type {[boolean, function]} isLoading - [initialValue, updaterFunction]
   */
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
            id="copyinput"
            className="copy-update-label eds-text-weight--heavy"
          />

          <button
            className="btnn-n"
            onClick={handleCancelClick}
            disabled={isLoading}
            id="cancelbutton"
          >
            <u className="btnn-n">Cancel</u>
          </button>
          <button
            className="btnn-n"
            onClick={handleSaveClick}
            disabled={isLoading}
            id="saveinput"
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" loading={isLoading} size={15} />
            ) : (
              <u>Save</u>
            )}
          </button>
        </div>
      ) : (
        <div>
          <span className="buttonselect"> {url}</span>
          <button
            className="icon-button-combo--button"
            onClick={handleEditClick}
            disabled={isLoading}
            id="Editinput"
          >
            <FaEdit className="eds-tooltip--hoc-wrapper" />
          </button>
          <button
            onClick={handleCopyClick}
            title="copy"
            data-clipboard-action="copy"
            data-clipboard-target="#input"
            className="icon-button-combo--button eds-l-mar-left-3"
            id="copyicon"
          >
            <FaCopy />
          </button>
        </div>
      )}
    </div>
  );
}

export default UrlEditor;
