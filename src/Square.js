import React, {Component} from 'react';

class Square extends Component{

    render(){
        return (<button type="button" id={this.props.id}
                        onClick={() => this.props.onClick(this.props)}
                        className="Square">

                    {this.props.text}

                </button>);
    }
}

export default Square;