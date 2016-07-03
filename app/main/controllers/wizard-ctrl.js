'use strict';
angular.module('main')
.controller('WizardCtrl', function ($log) {

  $log.log('Hello from your Controller: WizardCtrl in module main:. This is your controller:', this);
 
 this.currentCard = {};
 this.currentIndex = 0;
 this.direction = 'left';
 
 this.cards = [
            {'id': 0, 'image': 'main/assets/images/img00.jpg', 'content': 'Image 00'},
            {'id': 1, 'image': 'main/assets/images/img01.jpg', 'content': 'Image 01'},
            {'id': 2, 'image': 'main/assets/images/img02.jpg', 'content': 'Image 02'},
            {'id': 3, 'image': 'main/assets/images/img03.jpg', 'content': 'Image 03'},
            {'id': 4, 'image': 'main/assets/images/img04.jpg', 'content': 'Image 04'}
        ];
 
  
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

});
