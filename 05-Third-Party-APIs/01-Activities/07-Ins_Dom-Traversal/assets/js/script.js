// Highlight which elements in the DOM are the children of the parent element
// Uncomment the following two lines to see the which elements are the children to the #top
$('#top').children().css('color', 'yellow');
console.log($('#top').children());

// Uncomment the following line to see the which element is the first direct child of the <main>
$('#top').children().eq(0).addClass('boxy');
// 0 equal the first child element in the HTML 

// Uncomment the following line to add a list item to the list
$('#top').children().eq(4).append($('<li>Classmates</li>'));
// therefor the is targeting the 5th
//it will always be one more

// Uncomment the following line to style the list items
$('#top')
.children('ul')
/**
 * .childrem()
 * .eq(4)
 *  This would also work to replce .children(ul)
 */
.children()
.addClass('bg-primary text-dark mb-3 p-3')
.css('border-radius', '.4rem');
// append child to a parent -> parent.append(child)
//children of an element -> parent.children().eq(o).childen.eq(0)

