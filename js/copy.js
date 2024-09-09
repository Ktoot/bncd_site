

function copy(sender){
    navigator.clipboard.writeText(sender.innerHTML).then(function() {
        alert('Текст успешно скопирован в буфер обмена\n' + sender.innerHTML);
      }, function(err) {
        alert('Произошла ошибка при копировании текста: ' + err);
      });
}