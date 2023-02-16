import '../css/style.css'
import pageLoader from './components/loader/pageLoader.js';

// Load the page content and tabs
pageLoader()

// Tab switching logic
function switchTab(tabId, event) {
    // Get all the tabs and the content associated with them
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    // Hide all the content associated with the tabs
    contents.forEach((content) => {
        content.style.display = 'none';
    });

    // Set the selected tab to active
    tabs.forEach((tab) => {
        tab.classList.remove('active');
        if (tab.id === tabId) {
            tab.classList.add('active');
        }
    });

    // Show the content associated with the selected tab
    const content = document.querySelector(`#${tabId}-content`);
    content.style.display = 'block';
}

// Trigger the switchTab function when a tab is clicked.
const tabs = document.querySelectorAll('.tab-button');
tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
        switchTab(tab.id, event);
    });
});

// Only load Home tab by default
window.onload = () => {
    const loadHome = document.querySelectorAll('.tab-content')[0];
    loadHome.style.display = 'block'
}