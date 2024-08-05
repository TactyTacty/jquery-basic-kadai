$(function() {
  $(document).on('load scroll', (e) => {
    if(e.type === 'load'){
      $('div').text('loadイベントが発生しました')
    }
    if(e.type === 'scroll'){
      console.log('scrollイベントが発生しました')
    }
  });
});