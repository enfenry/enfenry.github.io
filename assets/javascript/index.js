$(document).ready(function () {
    // let aboutNav = $('#about-nav');
    // console.log(aboutNav.attr('class'));
    // aboutNav.removeClass('active');

    // aboutNav.attr("class", "nav-link navbar-link")

    function createProjectImage(obj) {
        let img = $("<img>");
        img.addClass("project");
        img.attr("src", obj.src);
        return img;
    }

    function createPrimaryLink(obj) {
        let primaryLink = $("<a>");
        primaryLink.addClass("portfolio");
        primaryLink.attr("href", obj.href);
        primaryLink.attr("target", "_blank");
        let title = $("<h4>");
        title.html(obj.title)
        primaryLink.html(title);
        return primaryLink;
    }

    function createGitHubLink(obj) {
        let gitHubLink = $("<a>");
        gitHubLink.attr("href", obj.github);
        gitHubLink.attr("target", "_blank");
        let img = $("<img>");
        img.addClass("caption");
        img.attr("src", "assets/images/gitHub_white.png");
        img.attr("width", "20");
        img.attr("height", "20");
        gitHubLink.html(img);
        return gitHubLink;
    }

    function createDescription(obj) {
        let description = $("<div>");
        description.addClass("desc");
        description.html(obj.description);
        description.append("<br/><br/>");
        description.append("Utilizes:");
        return description;
    }

    function createTechList(obj) {
        let row = $("<div>");
        row.addClass("row");
        obj.technologies.forEach(function (technology) {
            let col = $("<div>");
            col.addClass("col-6");
            let li = $("<li>");
            li.addClass("desc");
            if (technology.length > 15) {
                li.html("<small>" + technology + "</small>");
            }
            else {
                li.html(technology);
            }
            col.append(li);
            row.append(col);
        })
        return row;
    }

    function createCaption(obj) {
        let aside = $("<aside>");
        aside.addClass("caption");
        let primaryLink = createPrimaryLink(obj)
        aside.append(primaryLink);
        if (obj.github) {
            let gitHubLink = createGitHubLink(obj);
            aside.append(gitHubLink);
        }

        aside.append("<br/><br/>");

        let description = createDescription(obj)
        let techList = createTechList(obj);

        aside.append(description);
        aside.append(techList);
        return aside;
    }

    function createProjectFrame(obj) {
        let frame = $("<div>");
        frame.addClass("frame");
        let img = createProjectImage(obj);
        let caption = createCaption(obj)

        frame.append(img);
        frame.append(caption);
        return frame;
    }

    function createProject(obj) {
        let col = $("<div>");
        col.addClass("col-center col-12 col-md-6 col-xl-3");
        let frame = createProjectFrame(obj)
        col.append(frame);
        return col;
    }

    $('.navbar-link').on('click', function () {
        let id = $(this).attr('aria-controls');
        $('#' + id).addClass('show')
    });

    $.getJSON("projects.json", function (json) {

        json.forEach(function (ele, index) {
            let project = createProject(ele);
            $("#portfolio-content").append(project);
        });
    });

});