(function() {
    var app = angular.module('store', [ ]);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller('PanelController', function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });

    app.controller("ReviewController", function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.00,
            description: '. . .',
            canPurchase: true,
            images: [
                {
                    full: 'dodecahedron-01-full.jpg',
                    thumb: 'dodecahedron-01-thumb.jpg'
                },
                {
                    full: 'dodecahedron-02-full.jpg',
                    thumb: 'dodecahedron-02-thumb.jpg'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    author: 'jim@bob.com',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sed ipsum nec vehicula. Curabitur et lacinia metus, ac congue lectus. Integer quis tempus nisl. Sed pulvinar tortor eu nibh sodales, vitae lobortis felis volutpat. Proin sapien ligula.'
                },
                {
                    stars: 1,
                    author: 'bob@jim.com',
                    body: 'Vivamus vehicula fermentum ex. Phasellus erat diam, pretium ac convallis non, facilisis in tellus. Suspendisse nec nisl fermentum, scelerisque lectus et, facilisis sem. Curabitur lobortis id velit vitae imperdiet.'
                },
                {
                    stars: 3,
                    author: 'billy@bob.com',
                    body: 'Mauris iaculis orci non laoreet congue. Sed in blandit velit. Donec mattis imperdiet tortor a fringilla. Quisque nunc nunc, bibendum vitae dignissim quis, iaculis maximus lacus. Sed ut arcu ut sem efficitur dignissim a non velit. Nam rutrum ipsum eu dui ultricies efficitur.'
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: '. . .',
            canPurchase: false,
            images: [
                {
                    full: 'pentagonal-gem-01-full.jpg',
                    thumb: 'pentagonal-gem-01-thumb.jpg'
                },
                {
                    full: 'pentagonal-gem-02-full.jpg',
                    thumb: 'pentagonal-gem-02#-thumb.jpg'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    author: 'jim@bob.com',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque sed ipsum nec vehicula. Curabitur et lacinia metus, ac congue lectus. Integer quis tempus nisl. Sed pulvinar tortor eu nibh sodales, vitae lobortis felis volutpat. Proin sapien ligula.'
                },
                {
                    stars: 1,
                    author: 'bob@jim.com',
                    body: 'Vivamus vehicula fermentum ex. Phasellus erat diam, pretium ac convallis non, facilisis in tellus. Suspendisse nec nisl fermentum, scelerisque lectus et, facilisis sem. Curabitur lobortis id velit vitae imperdiet.'
                },
                {
                    stars: 3,
                    author: 'billy@bob.com',
                    body: 'Mauris iaculis orci non laoreet congue. Sed in blandit velit. Donec mattis imperdiet tortor a fringilla. Quisque nunc nunc, bibendum vitae dignissim quis, iaculis maximus lacus. Sed ut arcu ut sem efficitur dignissim a non velit. Nam rutrum ipsum eu dui ultricies efficitur.'
                }
            ]
        }
    ]

})();