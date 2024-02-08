chrome.commands.onCommand.addListener(function (command) {
    switch (command) {
        case 'skip':
            chrome.tabs.update(
                { url: 'https://www.youtube.com/shorts' }
            );
            sleep(2);
            chrome.tabs.goBack();
            break;
        default:
            console.log(`Command ${command} not found`);
    }
});
function sleep (seconds) {
    var start = new Date().getTime();
    while (new Date() < start + seconds*1000) {}
    return 0;
}
