document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("popupButton");
    if (button) {
        button.addEventListener("click", function () {
            const popup = window.open(
                "https://us.sandata.com/Security/Login.aspx?agencyno=88075",
                "_blank",
                "width=800,height=600"
            );
            if (!popup) {
                alert("Popup was blocked. Please allow popups for this site.");
            }
        });
    }
});
