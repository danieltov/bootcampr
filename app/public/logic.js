function compare(user) {
    $.get('/api/camprs', function(data) {
        let diff = [];

        data.forEach(x => {
            let totalDifference = 0;

            for (let i = 0; i < user.scores.length; i++) {
                totalDifference += Math.abs(user.scores[i] - x.scores[i]);
            }
            diff.push(parseInt(totalDifference));
        });
        let newBFF = data[findSmallest(diff)];
        console.log('the difference:');
        console.log(findSmallest(diff));
        let percentage = (50 - findSmallest(diff)) / 0.5;

        doModal(newBFF, percentage);
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

function doModal(data, per) {
    let name = data.name.toUpperCase(),
        img = data.photo;

    let html = `<div class="modal fade" id="camprModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-dark">Your New Best Friend: ${name}</h5>
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img class="img-fluid" src="${img}">
                    <p class="lead text-dark">You and ${name}'s survey responses were <b>${per}% similar!</b></p>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    $('#modalContainer').html(html);
    $('#camprModal').modal();
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
