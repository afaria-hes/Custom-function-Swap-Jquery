$.fn.swap = function (elem) {
  elem = elem.jquery ? elem : $(elem);
  return this.each(function () {
    $(document.createTextNode(""))
      .insertBefore(this)
      .before(elem.before(this))
      .remove();
  });
  
  
  // Example
  
  $('.element1').swap('element2')
  
  // element1 and element2 will swap position when page Js loads
