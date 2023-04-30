// Import the Splide.js library
import Splide from '@splidejs/splide'

// Wait for the DOM to be fully loaded before initializing the portfolio slider
document.addEventListener('DOMContentLoaded', function () {
    // Create a new Splide object and pass in configuration options
    new Splide('.portfolio', {
        perPage: 4, // Show 4 slides per page
        perMove: 1, // Move 1 slide at a time
        gap: 16, // Add a 16px gap between each slide
        autoWidth: true, // Make each slide have an auto width
        drag: 'free', // Allow free dragging of the slider
        type: 'loop', // Loop the slider continuously
        breakpoints: {
            // Define responsive breakpoints for smaller screens
            640: {
                // For screens smaller than 640px
                perPage: 1, // Show 1 slide per page
                perMove: 1, // Move 1 slide at a time
                autoWidth: false, // Disable auto width and set a fixed width for each slide
                focus: 'center', // Center the focused slide
                snap: true, // Snap the slider to each slide when dragging
                gap: 0, // Remove the gap between each slide
            },
        },
    }).mount() // Mount the Splide object to make it visible on the page
})

// Wait for the DOM to be fully loaded before initializing the portfolio slider
document.addEventListener('DOMContentLoaded', function () {
    // Create a new Splide object and pass in configuration options
    new Splide('.brands', {
        perPage: 15, // Show 4 slides per page
        perMove: 1, // Move 1 slide at a time
        gap: 16, // Add a 16px gap between each slide
        autoWidth: true, // Make each slide have an auto width
        drag: 'free', // Allow free dragging of the slider
        type: 'loop', // Loop the slider continuously
        pagination: false,
        autoplay: true,
        arrowPath: 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z',
    }).mount() // Mount the Splide object to make it visible on the page
})
