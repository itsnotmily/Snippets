javascript:var list = document.querySelectorAll('*[href*="youtu"]');var urls = [];for (var i = 0; i < list.length; i  ) {var id = list[i].href.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/);if (id!=null){ if (id[1].length == 11) { urls.push(id[1]);}}}var unq = urls.filter(function(elem, index, self) { return index === self.indexOf(elem);}); if (unq.length > 0){ window.open("https://www.youtube.com/watch_videos?video_ids="   unq.join());}