# Wiki-Science-Bookmarklet
This bookmarklet evaluates the popularity of the subject of a scientific Wikipedia article. The bookmarklet finds the article’s references from scientific journals and calculates a mean impact factor based on the journal that each of these references was published in.

Note that the bookmarklet still misses some of the references due to differences in how journal names are written in Wikipedia HTML vs. how they are written in the website that was scraped (e.g. 'Int. Journal of Dev. Bio.' in Wikipedia and 'International Journal of Developmental Biology' in scraped website).

To use, create a new bookmark, paste the code in `bm_stub` in the bookmark's URL field, and click the bookmark when on a Wikipedia page of your choosing.
