var d_id = 4;

function addCard(id){
    console.log(d_id);
    var tweet = $('<div class="card bg-light mb-3" style="max-width: 18rem;" id="interest'+d_id+'"> <div class="card-header">Tweet</div><div class="card-body"><h5 class="card-title">Tweet</h5><p class="card-text">Here we can view a tweet. This is a fake tweet.</p><button type="button" class="btn btn-info" onclick="deleteCard(interest'+d_id+')">Delete Interest</button></div></div>');
    tweet.appendTo('#interest'+id+'');
    d_id++; //d_id is set to 4 and then counts up after each appended card so that we get a unique id for each card, used for deleting later.
}

function deleteCard(interest_id){
    document.getElementById(interest_id.id).remove()
}