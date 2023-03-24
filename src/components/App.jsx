import React from "react";
import Publish from "./publish-preview";
import Footer from "./Footer";
/**
 * @component called "App".
 * @ which contains two child components - "Publish" and "Footer".
 * "Publish" and "Footer" are imported components, and "./app.css" is the style sheet for this component.
 */

function App(){return<div>
<Publish />
<Footer/>
</div>}
export default App