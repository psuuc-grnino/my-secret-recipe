document.addEventListener('DOMContentLoaded', function() {
    alert("Hi, I am your one and only beautiful Bunjing🥰");
    let name = prompt("Before you will enter me, I mean in this page - can you type my Fullname? Faster!");
    if (name === "Geraldine Rosete Niño") {
        alert("Yes baby, Ugh! Wahahaha sana nag eenjoy ka!");
        askAnniversary();  
    } else {
        alert("How can you forgot my Fullname! You don't love me😭");
    }

    function askAnniversary() {
        swal({
            title: "When was our anniversary? (MM/DD/YYYY)",
            text: "Enter the date as (00/00/0000)",
            content: "input",
            buttons: {
                confirm: {
                    text: "OK",
                    value: true,
                    visible: true,
                    className: "",
                    closeModal: true
                },
                cancel: {
                    text: "I'm not sure",
                    value: null,
                    visible: true,
                    className: "",
                    closeModal: true,
                }
            },
        }).then((dateValue) => {
            if (dateValue === "01/30/2023") {
                swal("Correct!", "'Yan kapag nakalimutan mo may iba kana huhu!😭", "success").then(() => {
                    askLoveQuestion();
                });
            } else if (dateValue) {
                swal("Baby😭", "Hindi mo ako mahal ah! Nagsakit Bogart!", "error").then(() => {
                    askLoveQuestion();
                });
            } else {
                swal("Gwenchana!", "It's payn!!! Wala na game over hays!", "info").then(() => {
                    askLoveQuestion();
                });
            }
        });
    }

    function askLoveQuestion() {
        swal({
            title: "Mahal mo ba talaga ako?",
            text: "Oh, 'bat ka nagdadalawang isip huh? Sus, mi amore hays😭",
            buttons: {
                oo: {
                    text: "Oo",
                    value: "yes",
                },
                hindi: {
                    text: "Hindi",
                    value: "no",
                }
            },
            dangerMode: true,
        }).then((value) => {
            if (value === "yes") {
                swal({
                    title: "Buti naman!",
                    text: "Kala ko may nagsasayet na sayong iba!",
                    icon: "success",
                    button: "Proceed"
                }).then(() => {
                    // Redirect to the monthsary.html page
                    window.location.href = 'monthsary.html';
                });
            } else {
                swal({
                    title: "Bakit ka pa magpro-proceed kung hindi mo ako mahal?!",
                    text: "Ah basta, in love ka sa akin!",
                    icon: "warning",
                    button: "Proceed"
                }).then(() => {
                    // Redirect regardless of the user's response to continue the interaction
                    window.location.href = 'monthsary.html';
                });
            }
        });
    }
});
