/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    let i = 0;
    while (i < count) {
        const my__tag = document.createElement(tag);
        my__tag.innerHTML = content;
        document.body.appendChild(my__tag);
        i += 1;
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let parentEl = (childrenCount, lvl) => {
        let childEl = document.createElement('div');
        let i = 0;
        childEl.setAttribute('class', `item_${lvl}`);
        if (lvl < level) {
            while (i < childrenCount) {
                childEl.appendChild(
                    parentEl(childrenCount, lvl + 1),
                );
                i++;
            }
        }
        return childEl;
    };
    return parentEl(childrenCount, 1);
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let tree = generateTree(2, 3);
    let newChild = document.createElement('section');

    newChild.classList.add('item_2');
    newChild.innerHTML = tree.firstChild.innerHTML;

    let newChild2 = document.createElement('section');

    newChild2.classList.add('item_2');
    newChild2.innerHTML = tree.firstChild.innerHTML;
    tree.removeChild(tree.getElementsByClassName('item_2')[0]);
    tree.removeChild(tree.getElementsByClassName('item_2')[0]);
    tree.appendChild(newChild);
    tree.appendChild(newChild2);

    return tree;
}
