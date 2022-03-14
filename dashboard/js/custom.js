//json data for table//
let data = [
    {
        no: "1",
        projectName: "landing Page design",
        date: "May 21,2019",
        StartTime: "1:10pm",
        StopTime: "9:20pm",
        duration: "8:10:37"
    },
    {
        no: "3",
        projectName: "Mobile APP",
        date: "May 21,2019",
        StartTime: "1:10pm",
        StopTime: "8:20pm",
        duration: "7:10:37"
    },
    {
        no: "5",
        projectName: "UI/UX",
        date: "May 21,2019",
        StartTime: "1:10pm",
        StopTime: "6:20pm",
        duration: "6:10:37"
    },
    {
        no: "2",
        projectName: "Wesite/app",
        date: "May 21,2019",
        StartTime: "1:10pm",
        StopTime: "10:20pm",
        duration: "9:10:37"
    },
    {
        no: "4",
        projectName: "Branding",
        date: "May 21,2019",
        StartTime: "1:10pm",
        StopTime: "9:20pm",
        duration: "8:10:37"
    },


]


let a = data.map((e) => {

    console.log(e);
    return (`<tr>
                        
    <td><span class="num ">${e.no}</span>${e.projectName}</td>
    <td>${e.date}</td>
    <td>${e.StartTime}</td>
    <td>${e.StopTime}</td>
    <td>${e.duration}</td>
</tr>`
    )
})
let b = a.join('')

document.getElementById("myTable").innerHTML = b;
///tabledata-over//


///sidenav-class///

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('.leftsidemenu').toggleClass('active');
        $('body').toggleClass('pagewrapperbox');
    });
    $('#closeCollapse').on('click', function () {
        $('.leftsidemenu').removeClass('active');
        $('body').removeClass('pagewrapperbox');
    });

    ///tablestack-responsive//

    function t() {
        $(window).width() < 768 ? $(".table-responsive-stack").each(function (t) {
            $(this).find(".table-responsive-stack-thead").show(), $(this).find("thead").hide()
        }) : $(".table-responsive-stack").each(function (t) {
            $(this).find(".table-responsive-stack-thead").hide(), $(this).find("thead").show()
        })
    }
    $(".table-responsive-stack").each(function (t) {
        var e = $(this).attr("id");
        $(this).find("th").each(function (t) {
            $("#" + e + " td:nth-child(" + (t + 1) + ")").prepend('<span class="table-responsive-stack-thead">' + $(this).text() + " : </span> "), $(".table-responsive-stack-thead").hide()
        })
    }), $(".table-responsive-stack").each(function () {
        var t = $(this).find("th").length,
            e = 100 / t + "%";
        $(this).find("th, td").css("flex-basis", e)
    }), t(), window.onresize = function (e) {
        t()
    }



});





