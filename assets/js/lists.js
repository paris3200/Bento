// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘
// Functions for printing both lists

const generateFirstListsContainer = () => {
	for (const list of CONFIG.firstlistsContainer) {
		const linksHTML = list.links.map(link => `
          <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${link.link}"
          class="listItem"
          >${link.name}</a>
        `).join('');

		let item = `
        <div class="card list list__${list.id}" id="list_${list.id}">
          <i class="listIcon" data-lucide="${list.icon}"></i>
          ${linksHTML}
        </div>
      `;
		const position = 'beforeend';
		lists_1.insertAdjacentHTML(position, item);
	}
};

const generateSecondListsContainer = () => {
	for (const list of CONFIG.secondListsContainer) {
		const linksHTML = list.links.map(link => `
        <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${link.link}"
        class="listItem"
        >${link.name}</a>
        `).join('');

		let item = `
        <div class="card list list__${list.id}" id="list_${list.id}">
        <i class="listIcon" icon-name="${list.icon}"></i>
        ${linksHTML}
        </div>
      `;
		const position = 'beforeend';
		lists_2.insertAdjacentHTML(position, item);
	}
};

const generateLists = () => {
	switch (CONFIG.bentoLayout) {
		case 'bento':
			generateFirstListsContainer();
			break;
		case 'lists':
			generateFirstListsContainer();
			generateSecondListsContainer();
			break;
		default:
			break;
	}
};

generateLists();
