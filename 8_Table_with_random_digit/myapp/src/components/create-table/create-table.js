import React from 'react';

import './create-table.css';

class CreateTable extends React.Component{

    random = (arr, s)=>{
        let rnd = Math.floor(Math.random() * (s - 1 + 1)) + 1;
        if(arr.length === 0){
            arr.push(rnd);
        }else if(arr.indexOf(rnd) === -1){
            arr.push(rnd);
        }else{
            while(arr.indexOf(rnd) !== -1){
                rnd = Math.floor(Math.random() * (s - 1 + 1)) + 1;
            };
            arr.push(rnd);
        };
        return rnd;
    };

    createTable = () =>{
        const {tableSize} = this.props;
        if(Array.isArray(tableSize)){
            const N = tableSize[0];
            const M = tableSize[1];
            let tempArray = [];
            let sum = N*M;
            let rows = [];
            for (var i = 0; i < N; i++){
                let rowID = `row${i}`
                let cell = []
                for (var idx = 0; idx < M; idx++){
                    let cellID = `cell${i}-${idx}`
                    cell.push(<td key={cellID} id={cellID}>{this.random(tempArray, sum)}</td>)
                };
                rows.push(<tr key={i} id={rowID}>{cell}</tr>)
            };
            return rows;
        }else{
            return null;
        }
    };

    render(){
        return(
            <table id="table">
                <tbody>
                    {this.createTable()}
                </tbody>
            </table>
        );
    };
};

export default CreateTable;