$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it("URL is defined and is not empty", function() {
            //regular expression to ensure the URL is not empty and formatted correctly. I found this in a Stackoverflow thread."https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url"
            var checkUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).toMatch(checkUrl);
            });
        });

        it('name is defined and is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeTruthy();
            });
        });
    });

    describe('The menu', function() {
        it('menu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('menu displays when menu icon clicked, hides when clicked again', function() {
            // menu displays on click
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // menu hides on second click
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('loadFeed runs and has more than 0 entries', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {
        var initFeed,
            nextFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                // store content of feed on first load
                initFeed = $('.feed').html();
                done();
            });
        });

        it('new feed is loaded on feed change', function(done) {
            // change feed by loading a new index
            loadFeed(1, function() {
                // store content of new feed
                nextFeed = $('.feed').html();

                expect(initFeed).not.toEqual(nextFeed);
                done();
            });
        });
    });
}());