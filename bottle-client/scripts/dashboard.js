const dashboardList = document.getElementById("dashboard-list");

axios.get("../../bottle-server/get_dashboard.php").then((response) => {
    response.data.data.forEach((bottle) => {
        const entry = document.createElement("div");
        entry.classList.add("bottle-entry");

        const content = document.createElement("p");
        content.classList.add("bottle-content");
        content.textContent = bottle.content;
        entry.appendChild(content);

        const info = document.createElement("div");
        info.classList.add("bottle-info");

        const marksCount = document.createElement("span");
        marksCount.textContent = bottle.marks.length + " mark(s)";
        info.appendChild(marksCount);

        const holdCount = document.createElement("span");
        holdCount.textContent = "Held " + bottle.hold_count + " time(s)";
        info.appendChild(holdCount);

        entry.appendChild(info);

        const marksList = document.createElement("div");
        marksList.classList.add("marks-list");

        bottle.marks.forEach((markText) => {
            const mark = document.createElement("p");
            mark.classList.add("mark");
            mark.textContent = markText;
            marksList.appendChild(mark);
        });

        entry.appendChild(marksList);

        dashboardList.appendChild(entry);
    });
});
