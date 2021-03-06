function ddg_spice_gifs(res) {
    if(!res || !res.data || !res.data.length){ return; }

    var searchTerm = DDG.get_query().replace(/gifs?/i,'').trim();

    Spice.add({
        id: 'gifs',
        name: 'Gifs',

        data: res.data,
        normalize: function(item) {
            return {
                thumbnail: item.images.fixed_height_still.url,
                image: item.images.fixed_height.url,
                url: item.url,
                height: item.images.fixed_height.height,
                width: item.images.fixed_height.width
            };
        },
        meta: {
            sourceName: 'Giphy',
            sourceUrl: 'http://giphy.com/search/' + encodeURIComponent(searchTerm),
            sourceIcon: true,
            count: res.pagination.count,
            total: res.pagination.total_count,
            itemType: 'Gifs'
        },

        view: 'Images'
    });
} 
