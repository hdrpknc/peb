import React, {Component} from 'react';
import Square from './Square.js';

class BoardRow extends Component{

    render(){
        return (
            <div className="RowContainer">
                <Square id={this.props.id + '.0'} text={this.props.texts[0]} onClick={(squareProperties) => this.props.onClick(squareProperties)}/>
                <Square id={this.props.id + '.1'} text={this.props.texts[1]} onClick={(squareProperties) => this.props.onClick(squareProperties)}/>
                <Square id={this.props.id + '.2'} text={this.props.texts[2]} onClick={(squareProperties) => this.props.onClick(squareProperties)}/>
                <Square id={this.props.id + '.3'} text={this.props.texts[3]} onClick={(squareProperties) => this.props.onClick(squareProperties)}/>
                <Square id={this.props.id + '.4'} text={this.props.texts[4]} onClick={(squareProperties) => this.props.onClick(squareProperties)}/>
            </div>
        );
    }
}

export default BoardRow;