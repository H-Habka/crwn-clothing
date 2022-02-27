import {useSelector } from 'react-redux'
import './collection.scss'
import { useParams } from 'react-router-dom'
import { selectCollection } from '../../redux/shop/ShopSelector'
import CollectionItem from '../collection-item/collection-item.component'


const Collection = () => {
  const params = useParams();
  const {items,title} = useSelector(state =>
    selectCollection(params.id)(state)
  )
  
  return (
    <>
      <h1 className="collection-title">{title}</h1>
      <div className='items-container'>
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item}/>
          ))
        }
      </div>
    </>
  )
}





export default Collection