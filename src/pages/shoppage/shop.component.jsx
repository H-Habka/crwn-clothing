import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview';
import Collection from '../../components/collection/collection';



const ShopPage = () => (
    
        <Routes>
            <Route path="" element={<CollectionsOverview />}/>
            <Route path=":id" element={<Collection />}/>
        </Routes>

)

export default ShopPage