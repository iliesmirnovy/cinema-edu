import {renderTemplate, RenderPosition} from './render';
import {createSiteMenuTemplate} from './view/site-menu-view';
import {createHeaderProfile} from './view/site-profile-view';
import {createElementsSorting} from './view/site-sort-view';
import {createContent} from './view/site-content-view';
import {createMovieCard} from './view/site-movie-card-view';
import {showExtraElements} from './view/site-extra-elements-view';
import {createShowMoreButton} from './view/site-show-more-view';
import {showFooterStatistics} from './view/site-footer-statistics-view';


const mainSiteElement = document.querySelector('.main');
const headerSiteElement = document.querySelector('.header');
const footerSiteElement = document.querySelector('.footer');
const footerStatistics = footerSiteElement.querySelector('.footer__statistics');

renderTemplate(headerSiteElement, createHeaderProfile(), RenderPosition.BEFOREEND);
renderTemplate(mainSiteElement, createContent(), RenderPosition.AFTERBEGIN);
renderTemplate(mainSiteElement, createElementsSorting(), RenderPosition.AFTERBEGIN);
renderTemplate(mainSiteElement, createSiteMenuTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(footerStatistics, showFooterStatistics(), RenderPosition.AFTERBEGIN);

const movieSection = mainSiteElement.querySelector('.films');
renderTemplate(movieSection, showExtraElements(), RenderPosition.BEFOREEND);

const movieList = movieSection.querySelector('.films-list');
renderTemplate(movieList, createShowMoreButton(), RenderPosition.BEFOREEND);

const moviesContainer = movieList.querySelector('.films-list__container');
for (let i = 1; i <= 5; i++) {
  renderTemplate(moviesContainer, createMovieCard(), RenderPosition.AFTERBEGIN);
}
