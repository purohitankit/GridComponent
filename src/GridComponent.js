import React from 'react';
import './GridComponent.css'
import Popup from "reactjs-popup";

var tableTD = [];
var tableTR = [];
var arrTH = [];
var arrTR = [];

function getHeaders(lst, arrTH, arrTR) {
    for (var i in lst) {
        var val = lst[i];
        for (var j in val) {
            var sub_key = j;
            var sub_val = val[j];
            arrTH.push(sub_key);
            arrTR.push(sub_val);
        }
    }
}

function renderTableBody(array) {

    for (var i in array) {
        var cnt = 0;
        tableTD = [];
        var val = array[i];
        for (var j in val) {
            tableTD.push(React.createElement("td", { id: "td" + cnt, key: cnt }, cnt === 0 ? <a target="#" href='' >{val[j]}</a> : val[j]));
            // tableTD.push(React.createElement("td", { id: "td" + cnt, key: cnt }, cnt === 0? <Popup trigger={<a className="pointertype" >{val[j]}</a>} children={<a></a>}  position="right center" ></Popup>:val[j] ));
            cnt++;
        }
        tableTR.push(React.createElement("tr", { id: "tr" + i, key: i }, tableTD));
    }
    return tableTR;
};

var renderTable = (array) => {
    getHeaders(array, arrTH, arrTR);
    const dist = (v, i, s) => {
        return s.indexOf(v) === i;
    }
    arrTH = arrTH.filter(dist);

    return (

        <table className="frmTable">
            <thead>
                <tr>
                    {arrTH.map(function (object, i) {
                        return <th key={i} id={"th" + i}>{object}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {renderTableBody(array)}
            </tbody>
        </table>
    );
}

const GridComponent = ({ rowcoll }) => {
    return (
        renderTable(rowcoll)
    );
};

export default GridComponent;