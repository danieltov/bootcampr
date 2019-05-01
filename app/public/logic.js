function compare(user) {
    $.get('/api/camprs', function(data) {
        let diff = [];

        data.forEach(x => {
            let totalDifference = 0;

            for (let i = 0; i < user.scores.length; i++) {
                totalDifference += Math.abs(user.scores[i] - x.scores[i]);
            }
            diff.push(totalDifference);
        });
        let newBFF = data[findSmallest(diff)];

        doModal(newBFF);
    });
}

function findSmallest(array) {
    var index = 0;
    var value = array[0];
    for (var i = 1; i < array.length - 1; i++) {
        if (array[i] < value) {
            value = array[i];
            index = i;
        }
    }
    return array[index];
}

$('#add-campr').on('click', function(e) {
    e.preventDefault();

    let radios = $('.active');
    let scores = [];

    for (let i = 0; i < radios.length; i++) {
        scores.push(parseInt(radios[i].innerText));
    }

    let newCampr = {
        name: $('#name')
            .val()
            .trim()
            .replace(/\s+/g, '')
            .toLowerCase(),
        photo: $('#photo')
            .val()
            .trim(),
        scores: scores
    };

    // post new campr to api
    $.post('/api/camprs', newCampr).then(function(data) {
        console.log(data);
        alert('Adding Campr...');
        compare(newCampr);
    });
});
