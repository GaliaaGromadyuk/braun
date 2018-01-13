$(document).ready(function() {
$('.postl').addClass("hidden").viewportChecker({
classToAdd: 'visible animated Left',
offset: 100
});
$('.postr').addClass("hidden").viewportChecker({
classToAdd: 'visible animated Right',
offset: 100
});
$('.postup').addClass("hidden").viewportChecker({
classToAdd: 'visible animated Up',
offset: 100
});
});