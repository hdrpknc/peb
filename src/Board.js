import React, {Component} from 'react';
import BoardRow from './BoardRow.js';
import clickSound from './audio/click.mp3';

class Board extends Component{
    constructor(){
        super();
        let aBingotexts = [
                "Wichtige Person hat keinen Vertreter",
                "Wichtige Person nimmt zum Go-Live Urlaub",
                "Projektleiter wird ersetzt",
                "Projekt-rückabwicklung wird in Betracht gezogen",
                "Entwickler hat nicht selber geschätzt",
                "Showstopper war zu Projektstart bekannt",
                "Wichtiges Projektmitglied ist krank",
                "SSP ist mangelhaft",
                "System/ Version/ Entwicklungs-umgebung ist veraltet",
                "Schwieriger Kunde",
                "Go-Live-Termin wird/kann nicht eingehalten werden",
                "Bekannte Fehler aus Lessons Learned werden wiederholt",
                "Fachbereich beteilitgt sich nicht/ stellt sich quer",
                "Projekt baut auf schlechtem Mock-Up /Prototypen auf",
                "Fachbereich sagt Tests ab/ moniert Entwicklungs-stand",
                "Keyplayer hat gekündigt",
                "Keine CRs sondern Defects",
                "Zeiten auf Business Developmemt buchen",
                "Projektmitglied /er ist/sind nicht festpreisfähig",
                "Blackbox",
                "Kunde entzieht Berechtigungen",
                "Projekt-mitglied bucht kunterbunt Zeiten",
                "Kundensysteme überraschend nicht erreichbar",
                "Entwicklungs-umgebung überraschend nicht erreichbar",
                "Schätzungen wurden gekürzt",
                "Datenmodell ist falsch",
                "Kein Budget für SSP gehabt",
                //a41-edition
                "Management will EAs",
                "Projekt-mitglied würfelt zahlen im Kopf",
                "Es wird extern eingekauft",
                "Projekt ohne Projekt-leitung",
                "Max. 1 Tag kann ich dafür einplanen",
                "Muschu",
                "Projekt-mitglied täuscht expertise vor",
                "Dilbert-Reporting",
                "Projekt-planung/-status ohne beteiligte Personen",
                "Achso",
                "Features ohne Mehrwert",
                "Beteiligten ist das Projekt unangenehm",
                "Getestet wird kurzfistig vorm Go-Live",
                "Beteiligte spielen E-Mail-Karussell",
                "Prioritäten werden neu sortiert",
                "Mehrere Excels im Umlauf",
                "Brooks's law",
                "Projekt-sabotage von Beteiligten",
                "Arglistige Täuschung von Stakeholdern"
            ];
        this.state = {
            aBingotexts: shuffleArray(aBingotexts),
            oIsSquareChecked: {
                "0.0" : false,
                "0.1" : false,
                "0.2" : false,
                "0.3" : false,
                "0.4" : false,
                "1.0" : false,
                "1.1" : false,
                "1.2" : false,
                "1.3" : false,
                "1.4" : false,
                "2.0" : false,
                "2.1" : false,
                "2.2" : false,
                "2.3" : false,
                "2.4" : false,
                "3.0" : false,
                "3.1" : false,
                "3.2" : false,
                "3.3" : false,
                "3.4" : false,
                "4.0" : false,
                "4.1" : false,
                "4.2" : false,
                "4.3" : false,
                "4.4" : false
            }
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(squareProperties) {
        console.log('Square ' + squareProperties.id + ' was clicked. ' + squareProperties.text);
        document.getElementById(squareProperties.id).style.background='orange';
        document.getElementById(squareProperties.id).style.color='white';
        let audio = new Audio(clickSound);
        audio.play();
        let oISC = this.state.oIsSquareChecked;
        if(oISC[squareProperties.id] === true){
            return;
        }
        oISC[squareProperties.id] = true;
        this.setState({oIsSquareChecked: oISC});
        this.props.onCheckWinner(this.state.oIsSquareChecked);
    }

    render(){
        return(
            <div>
                <BoardRow id="0" texts={this.state.aBingotexts.slice(0,5)}   onClick={(squareProperties) => this.handleClick(squareProperties)}/>
                <BoardRow id="1" texts={this.state.aBingotexts.slice(5,10)}  onClick={(squareProperties) => this.handleClick(squareProperties)}/>
                <BoardRow id="2" texts={this.state.aBingotexts.slice(10,15)} onClick={(squareProperties) => this.handleClick(squareProperties)}/>
                <BoardRow id="3" texts={this.state.aBingotexts.slice(15,20)} onClick={(squareProperties) => this.handleClick(squareProperties)}/>
                <BoardRow id="4" texts={this.state.aBingotexts.slice(20,25)} onClick={(squareProperties) => this.handleClick(squareProperties)}/>
            </div>
        );
    }
}

export default Board;

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
