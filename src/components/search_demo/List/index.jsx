import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SearchItem from '../Item'

export default class SearchResultList extends PureComponent {
    static propTypes = {
        results: PropTypes.array.isRequired,
        itemSelected: PropTypes.func.isRequired, 
    }
    state = {list: this.props.results}
    render() {
        const {list} = this.state
        const items = list.map((item)=>{
            console.log(item.id);
            return <SearchItem key={item.id} item={item}/>
        });
        return (
            <div className='search_list'>
                {items}
            </div>
        )
    }
}
