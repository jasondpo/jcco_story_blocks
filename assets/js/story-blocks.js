var storyBlocks = (function(){

//////////// Extend story block links to parent DIV //////////////

    var largeStoryLink = $(".large-story-block");
    var smallStoryLink = $(".small-story-block");

    
    $(".large-story-block").on("click", function() { 
        largeStoryLink = $(this).find("a").attr("href");
        window.location.href = largeStoryLink;
    })

    $(".small-story-block").on("click", function() { 
        smallStoryLink = $(this).find("a").attr("href");
        window.location.href = smallStoryLink;
    })

})();