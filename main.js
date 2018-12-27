var app = new Vue({
    el: '#app',
    data: {
        linkedIn: 'https://www.linkedin.com/in/josiah-yeow/',
        github: 'https://github.com/josiahyeow',
        email: 'jsiahyeow@gmail.com',
        apps: [
            {name: 'PocketLint', image: './images/pocketlint-icon.png', url:'#', type: 'iOS', desc: 'Image Scanner App'},
            {name: 'Flush', image: './images/flush-icon.png', url:'#', type: 'Android', desc: 'Task manager App'}
        ],
        designs: [
            {name: 'Property Search', image: './images/property-screens.png', desc: ''},
            {name: 'Real Estate', image: './images/realestate-screens.png', desc: ''},
            {name: 'Flush Design', image: './images/flush-screens.png', desc: ''}
        ]
    },
    computed: {
        age: function() {
            var year = new Date().getFullYear();
            var birthyear = 1996;
            return year - birthyear;
        }
    }
})
$(document).ready(function () {
    $('.fadeInImage').hide();
});

$(window).on('load', function () {
    $(".fadeInImage").each(function (i) {
        $(this).delay((i + 1) * 100).fadeIn();
    });
});
var lightbox = $('.designs-grid a').simpleLightbox();