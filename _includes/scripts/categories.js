(function() {
  var SOURCES = window.TEXT_VARIABLES.sources;
  function queryString() {
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    var i = 0, queryObj = {}, pair;
    var queryStr = window.location.search.substring(1);
    var queryArr = queryStr.split('&');
    for (i = 0; i < queryArr.length; i++) {
      pair = queryArr[i].split('=');
      // If first entry with this name
      if (typeof queryObj[pair[0]] === 'undefined') {
        // If second entry with this name
        queryObj[pair[0]] = pair[1];
      } else if (typeof queryObj[pair[0]] === 'string') {
        // If third or later entry with this name
        queryObj[pair[0]] = [queryObj[pair[0]], pair[1]];
      } else {
        queryObj[pair[0]].push(pair[1]);
      }
    }
    return queryObj;
  }

  var setUrlQuery = (function() {
    var baseUrl = window.location.href.split('?')[0];
    return function(query) {
      if (typeof query === 'string') {
        window.history.replaceState(null, '', baseUrl + query);
      } else {
        window.history.replaceState(null, '', baseUrl);
      }
    };
  })();

  window.Lazyload.js(SOURCES.jquery, function() {
    var $categories = $('.js-categories');
    var $articleCategories = $categories.find('button');
    var $categoryShowAll = $categories.find('.category-button-all');
    var $result = $('.js-result');
    var $sections = $result.find('section');
    var sectionArticles = [];
    var $lastFocusButton = null;
    var sectionTopArticleIndex = [];
    var hasInit = false;

    $sections.each(function() {
      sectionArticles.push($(this).find('.item'));
    });

    function init() {
      var i, index = 0;
      for (i = 0; i < $sections.length; i++) {
        sectionTopArticleIndex.push(index);
        index += $sections.eq(i).find('.item').length;
      }
      sectionTopArticleIndex.push(index);
    }

    function searchButtonsByCategory(_category) {
      if (!_category) {
        return $categoryShowAll;
      }
      var _buttons = $articleCategories.filter('[data-encode="' + _category + '"]');
      if (_buttons.length === 0) {
        return $categoryShowAll;
      }
      return _buttons;
    }
    function buttonFocus(target) {
      if (target) {
        target.addClass('focus');
        $lastFocusButton && !$lastFocusButton.is(target) && $lastFocusButton.removeClass('focus');
        $lastFocusButton = target;
      }
    }

    function categorySelect(category, target) {
      var result = {}, $articles;
      var i, j, k, _category;

      for (i = 0; i < sectionArticles.length; i++) {
        $articles = sectionArticles[i];
        for (j = 0; j < $articles.length; j++) {
          if (category === '' || category === undefined) {
            result[i] || (result[i] = {});
            result[i][j] = true;
          } else {
            var data_category = $articles.eq(j).data('category');
            if (category === data_category) {
              result[i] || (result[i] = {});
              result[i][j] = true;
            }
          }
        }
      }

      for (i = 0; i < sectionArticles.length; i++) {
        result[i] && $sections.eq(i).removeClass('d-none');
        result[i] || $sections.eq(i).addClass('d-none');
        for (j = 0; j < sectionArticles[i].length; j++) {
          if (result[i] && result[i][j]) {
            sectionArticles[i].eq(j).removeClass('d-none');
          } else {
            sectionArticles[i].eq(j).addClass('d-none');
          }
        }
      }

      hasInit || ($result.removeClass('d-none'), hasInit = true);

      if (target) {
        buttonFocus(target);
        _category = target.attr('data-encode');
        if (_category === '' || typeof _category !== 'string') {
          setUrlQuery();
        } else {
          setUrlQuery('?category=' + _category);
        }
      } else {
        buttonFocus(searchButtonsByCategory(category));
      }
    }

    var query = queryString(), _category = query.category;
    init(); categorySelect(_category);
    $categories.on('click', 'button', function() {
      categorySelect($(this).data('encode'), $(this));
    });

  });
})();
