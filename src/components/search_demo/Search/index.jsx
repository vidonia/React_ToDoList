import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class SearchHeader extends PureComponent {
    static propTypes = {
        searchAction: PropTypes.func.isRequired,
    }

    state = {
        input_content: '',
    };

    handleSearchBtnClick = (event) => {
         event.preventDefault();
         const {input_content} = this.state;
         this.props.searchAction(input_content);
    };

    handleInputChange = (event) => {
        this.state.input_content = event.target.value;
    };

    render() {
        return (
            <form className='search_form'>
                <input className='search_input' type="text" placeholder='请输入搜索关键字' onChange={this.handleInputChange}/>
                <button className='search_button' onClick={this.handleSearchBtnClick}>搜索</button>
            </form>
        )
    }
}
