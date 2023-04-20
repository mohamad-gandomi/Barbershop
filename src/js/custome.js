/**
 * Title: Custome JS
 * Description: This file contains all javascript functions for this website.
 * Author: Mohamad Gandomi
 *
 * Contents:
 * 1. Menu Toggle Button
 */

// 1. Menu Toggle Button
const menu = document.getElementById('menu')
const toggleButton = document.getElementById('menu-toggle-button')

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('translate-x-full')
})
