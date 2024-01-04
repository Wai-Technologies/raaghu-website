
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

function myFunction() {
    var input, filter, ulList, li, a, i, txtValue, notFoundMessages;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ulList = document.getElementsByClassName("sidebar-list");
    notFoundMessages = document.querySelectorAll('[id^="notFoundMessage"]');

    for (var j = 0; j < ulList.length; j++) {
        li = ulList[j].getElementsByTagName("li");

        var found = false; // Flag to check if any item is found in the current list

        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
                found = true; // Set flag to true if any item is found in the current list
            } else {
                li[i].style.display = "none";
            }
        }

        // Display "Not Found" message for the current list if no items are found
        if (notFoundMessages[j]) {
            notFoundMessages[j].style.display = found ? "none" : "block";
        }
    }
}

function clearSearch() {
    var input = document.getElementById("myInput");
    input.value = ""; // Clear the search input
    myFunction(); // Trigger the search function to update the display
}

