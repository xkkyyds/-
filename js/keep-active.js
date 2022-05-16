function clickTab(node) {
  node.classList.add('active');
  for (const fit of document.getElementsByClassName('fit')) {
  if (fit.id !== node.id) {
   fit.classList.remove('active');
    }
   }
 }