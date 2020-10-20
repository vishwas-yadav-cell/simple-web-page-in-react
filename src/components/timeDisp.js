import React from 'react';

function ele(t) {
    if (t < 12 && t > 1) {
        return <span style={{color:'green'}}>Good Morning</span>
    }if (t >= 12 && t <= 15) {
        return <span style={{color:'orange'}}>Good Afternoon</span>
    }if (t > 15 && t < 20) {
        return <span style={{color:'blue'}}>Good Evening</span>
    }else{
        return <span style={{color:'black'}}>Good Night</span>
    }
}

export default function time(){
    let d = new Date();
    let t = d.getHours();
    return ele(t);
}