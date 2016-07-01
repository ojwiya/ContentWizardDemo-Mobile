'use strict';
angular.module('main')
.controller('WizardCtrl', function ($log,$rootScope) {

  $log.log('Hello from your Controller: WizardCtrl in module main:. This is your controller:', this);
 
 this.currentCard = {};
 this.currentIndex = 0;
 
 this.cards = [{index:0,name:'card 1',content:'Card 1 content'},
{index:2,name:'card 2',content:'Card 2 content'},
{index:3,name:'card 3',content:'Card 3 content'},
{index:4,name:'card 4',content:'Card 4 content'},
{index:5,name:'card 5',content:'Card 5 content'},
{index:6,name:'card 6',content:'Card 6 content'},
{index:7,name:'card 7',content:'Card 7 content'},
{index:8,name:'card 8',content:'Card 18 content'}
]
 
   
  this.gotoFirst = function (index) {
    $log.log(index);

    //Get the next index

    $rootScope.$apply(); // $apply needed here for UI update
  };


  
     this.setCurrentSlideIndex = function (index) {
            this.direction = (index > this.currentIndex) ? 'left' : 'right';
            this.currentIndex = index;
        };

     this.isCurrentSlideIndex = function (index) {
            return this.currentIndex === index;
        };

      this.prevSlide = function () {
            this.direction = 'left';
            this.currentIndex = (this.currentIndex < this.cards.length - 1) ? ++this.currentIndex : 0;
        };

        this.nextSlide = function () {
            this.direction = 'right';
            this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.cards.length - 1;
        };
    })


\
});
