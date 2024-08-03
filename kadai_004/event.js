$(function() {
  $(document).on('load scroll', (e) => {
    if(e.type === 'load'){
      $('div').text('loadイベントが発生しました')
    }
    if(e.type === 'scroll'){
      $('div').text('scrollイベントが発生しました')
    }
  });
});