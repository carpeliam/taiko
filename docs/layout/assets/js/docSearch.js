/*eslint-disable */

function algoliaSearch() {
    docsearch({
        apiKey: 'b36d75c493b44a8f2605db66708a283b',
        indexName: 'taiko',
        inputSelector: '#search',
        algoliaOptions: { 'facetFilters': ['tags:$tag'] },
        debug: false // Set debug to true if you want to inspect the dropdown
    });
}

/*eslint-enable */
