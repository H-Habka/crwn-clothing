import React from 'react'
import ShopData from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: ShopData
        }
    }
    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map(({id , ...others }) => (
                        <CollectionPreview key={id} {...others }/>
                    ))
                }
            </div>
        )
    }
}


export default ShopPage