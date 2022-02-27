import './collectionsOverview.scss'
import { connect } from 'react-redux'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { createStructuredSelector } from 'reselect'
import { selectCollectionToArray } from '../../redux/shop/ShopSelector'

const CollectionsOverview = ({shopData}) => (

    <div className='shop-page'>
        {
            shopData.map(({id , ...others }) => (
                <CollectionPreview key={id} {...others }/>
            ))
        }
    </div>


  )


const mapStateToProps = createStructuredSelector({
    shopData : selectCollectionToArray
})

export default connect(mapStateToProps)(CollectionsOverview)