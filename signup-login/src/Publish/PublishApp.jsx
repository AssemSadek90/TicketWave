import React from 'react';
import Publish from './publish-preview';
/**
 * @component called "App".
 * @ which contains two child components - "Publish" and "Footer".
 * "Publish" and "Footer" are imported components, and "./app.css" is the style sheet for this component.
 */

function PublishApp() {
  return (
    <div>
      <Publish />
    </div>
  );
}
export default PublishApp;
