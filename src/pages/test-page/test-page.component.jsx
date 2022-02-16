import React from "react";
import './test-page.style.scss';
import ShopData from "../shoppage/shop.data";
import { useLocation } from "react-router-dom";
// import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import CollectionItem from "../../components/collection-item/collection-item.component";


function TestPage() {
    const location = useLocation();
    let collections = ShopData
    let test2 = location.pathname.split("/")
    let test3 = test2[test2.length - 1]

    return (
        <div className='shop-page'>
            {
                collections.filter((item) => item.routeName === test3).map(({ id, title, items, ...others }) => (
                    <div className='collection-preview'>
                        <h1 className='title'>{title.toUpperCase()}</h1>
                        <div className='preview'>
                            {
                                items.map(({ id, ...others }) => (
                                    <CollectionItem key={id} {...others} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TestPage


