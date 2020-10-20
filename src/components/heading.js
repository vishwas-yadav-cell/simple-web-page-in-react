import React from 'react';
import time from './timeDisp';

function heading() {
return (
<div className="mainDiv">
<h1>Hello sir, {time()}</h1>
</div>
);
}

export default heading;