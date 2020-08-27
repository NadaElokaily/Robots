import React,{Component} from 'react'

class SearchField extends Component{
    render(){
        const { onChangeSearch,value } = this.props
        return(
            <div className="pa2">
                <input 
                className="pa3 ba b--green bg-lightest-blue" 
                value={value}
                placeholder="Enter a Robot Name"
                onChange={onChangeSearch}/>
            </div>
        )
    }
}

export default SearchField