'use strict';

describe('module: main, filter: wizardStartFrom', function () {

  // load the filter's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // initialize a new instance of the filter before each test
  var $filter;
  beforeEach(inject(function (_$filter_) {
    $filter = _$filter_('wizardStartFrom');
  }));

  it('should return the input prefixed with "wizardStartFrom filter:"', function () {
    var input = [
            {'id': 0, 'image': 'main/assets/images/img00.jpg', 'content': 'Image 00'},
            {'id': 1, 'image': 'main/assets/images/img01.jpg', 'content': 'Image 01'},
            {'id': 2, 'image': 'main/assets/images/img02.jpg', 'content': 'Image 02'}
            ] 
            
    var start = 1;
    
    var expected = [
            {'id': 1, 'image': 'main/assets/images/img01.jpg', 'content': 'Image 01'},
            {'id': 2, 'image': 'main/assets/images/img02.jpg', 'content': 'Image 02'}
            ];
    
    expect($filter(input,start)).toEqual(expected);
    
  });

});
