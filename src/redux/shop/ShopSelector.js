const { createSelector } = require("reselect")

const shop = state => state.shop


export const selectCollection = (id) => (
    createSelector(
        [shop],
        shop => shop[id]
))


export const selectCollectionToArray = createSelector(
    [shop],
    (shop) => Object.keys(shop).map(key => shop[key])
)