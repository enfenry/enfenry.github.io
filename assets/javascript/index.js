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

    // <div class="col-center col-12 col-md-6 col-xl-3">
    //                 <div class="frame">
    //                     <img class="project" src="assets/images/recognicer.png">
    //                     <aside class="caption">
    //                         <a class='portfolio' href='https://mighty-garden-76734.herokuapp.com/' target='_blank'>
    //                             <h4>Smart Photo Library</h4>
    //                         </a>
    //                         <a href='https://github.com/ansarkhan/Recognicer' target='_blank'>
    //                             <img class='caption' src='assets/images/gitHub_white.png' width='20' height='20'>
    //                         </a>
    //                         <br />
    //                         <br />
    //                         <div class="desc">
    //                             Smart online photo library that lets you securely store, filter and organize
    //                             your
    //                             photo
    //                             collection. The app is built on a MERN stack and utilizes S3 and Rekognition
    //                             by
    //                             AWS.
    //                             <br />
    //                             <br />
    //                             Utilizes:
    //                         </div>
    //                         <div class="row">
    //                             <div class="col-6">
    //                                 <li class="desc">React</li>
    //                             </div>
    //                             <div class="col-6">
    //                                 <li class="desc">AWS</li>
    //                             </div>
    //                             <div class="col-6">
    //                                 <li class="desc">Node</li>
    //                             </div>
    //                             <div class="col-6">
    //                                 <li class="desc">JavaScript</li>
    //                             </div>
    //                             <div class="col-6">
    //                                 <li class="desc">MongoDB</li>
    //                             </div>
    //                             <div class="col-6">
    //                                 <li class="desc">CSS</li>
    //                             </div>
    //                             <div class="col-6">
    //                                 <li class="desc">Materialize</li>
    //                             </div>
    //                         </div>
    //                     </aside>
    //                 </div>
    //             </div>

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