const widget = "https://discord.com/api/guilds/367648314184826880/widget.json";
const link = document.getElementById("link");

const openInvite = function (data) {
    const invite = JSON.parse(data)["instant_invite"];
    link.href = invite
    window.location.replace(invite);
};

fetch(widget)
    .then(function(response) {
            response.text().then(openInvite);
        }, function (error) {
            console.log(error);
        }
    );
